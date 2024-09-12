import AssignmentsCard from "./AssignmentsCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

const AssignmentPage = () => {
  const axios = useAxios();
  const [currentPage, setCurrentPage] = useState(1);
  const [difficulty, setDifficulty] = useState(""); // State to store selected difficulty
  const itemsPerPage = 5;

  // Function to handle difficulty change
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
    setCurrentPage(1); // Reset to page 1 when difficulty is changed
  };

  // Fetch assignments based on page and difficulty
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignments", currentPage, difficulty],
    queryFn: () => {
      return axios.get(
        `/assignments?page=${currentPage}&limit=${itemsPerPage}&difficulty=${difficulty}`
      );
    },
  });

  // Total assignments based on the filtered data
  const totalAssignments = assignments?.data?.count || 0; // This should now reflect the correct filtered count
  const numberOfPages = Math.ceil(totalAssignments / itemsPerPage);

  const pages = [
    ...Array(numberOfPages)
      .keys()
      .map((item) => item + 1),
  ];

  const handlePrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Assignments
      </h2>

      {/* Difficulty filter */}
      <div className="mb-6 text-center">
        <label htmlFor="difficulty" className="text-lg font-semibold mr-3">
          Filter by Difficulty:
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
          className="px-3 py-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Assignment cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments?.data?.result?.map((assignment) => (
          <AssignmentsCard key={assignment._id} assignment={assignment} />
        ))}
      </div>

      {/* Conditionally render pagination only if there's more than one page */}
      {numberOfPages > 1 && (
        <div className="mt-10 text-center">
          <div className="inline-flex -space-x-px text-base h-10">
            <button
              onClick={handlePrePage}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </button>

            {pages.map((page, idx) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={idx}
                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
                  page === currentPage
                    ? "bg-blue-600 text-white rounded"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentPage;
