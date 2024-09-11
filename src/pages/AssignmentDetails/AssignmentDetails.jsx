import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";

const AssignmentDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();
  const [assignment, setAssignment] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfLink, setPdfLink] = useState("");
  const [quickNote, setQuickNote] = useState("");

  const { thumbnailUrl, title, description, marks, difficultyLevel, dueDate } =
    assignment;

  const { mutate, isLoading } = useMutation({
    mutationKey: ["assignmentDetails"],
    mutationFn: () => axios.get(`/assignments/${id}?email=${user.email}`),
    onSuccess: (data) => {
      setAssignment(data.data);
    },
  });

  useEffect(() => {
    mutate();
  }, [id, mutate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { pdfLink, quickNote });
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <div className="relative overflow-hidden rounded-lg h-64 mb-6">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-auto h-full object-cover rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-600 mb-2">
              <strong>Marks: </strong> {marks}
            </p>
            <p
              className={`text-sm font-medium mb-4 ${
                difficultyLevel === "hard"
                  ? "text-red-500"
                  : difficultyLevel === "medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              Difficulty Level: {difficultyLevel}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Due Date: </strong>{" "}
              {new Date(dueDate).toLocaleDateString()}
            </p>
          </div>

          <div className="flex">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-semibold hover:opacity-90 shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Take Assignment
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity"
          aria-hidden="true"
        >
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 transition-transform transform scale-105">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Submit Assignment
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 transition duration-300"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="pdfLink"
                  className="block text-sm font-medium text-gray-900"
                >
                  PDF Link
                </label>
                <input
                  type="url"
                  id="pdfLink"
                  name="pdfLink"
                  value={pdfLink}
                  onChange={(e) => setPdfLink(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="https://yourlink.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="quickNote"
                  className="block text-sm font-medium text-gray-900"
                >
                  Quick Note
                </label>
                <textarea
                  id="quickNote"
                  name="quickNote"
                  value={quickNote}
                  onChange={(e) => setQuickNote(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-full focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Add a quick note..."
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-blue-600 font-medium rounded-lg px-5 py-2.5 shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                Submit Assignment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetails;
