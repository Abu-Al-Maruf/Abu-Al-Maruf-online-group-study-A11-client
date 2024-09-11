import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SubmittedAssignment = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [obtainMarks, setObtainMarks] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axios = useAxios();
  const queryClient = useQueryClient();

  const { data: submittedAssignments } = useQuery({
    queryKey: ["submitted-assignments"],
    queryFn: async () => {
      const res = await axios.get("/user/submitted-assignments");
      return res.data;
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      await axios.put(`/user/submitted-assignment/${selectedAssignment._id}`, {
        obtainMarks,
        feedback,
        status: "Completed",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["submitted-assignments"]);
      setIsModalOpen(false);
      toast.success("Marks submitted successfully!");
    },
  });

  const handleGiveMark = (assignment) => {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submitted Assignments</h1>

      {submittedAssignments?.length === 0 ? (
        <p>No pending assignments.</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Assignment Title</th>
              <th className="py-2 px-4 border">Examinee Name</th>
              <th className="py-2 px-4 border">Total Marks</th>
              <th className="py-2 px-4 border">Action</th>
              <th className="py-2 px-4 border text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {submittedAssignments?.map((assignment) => (
              <tr key={assignment._id}>
                <td className="py-2 px-4 border">{assignment.title}</td>
                <td className="py-2 px-4 border">{assignment.userName}</td>
                <td className="py-2 px-4 border">{assignment.marks}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleGiveMark(assignment)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                  >
                    Give Mark
                  </button>
                </td>
                <td className="py-2 px-4 border text-right">
                  <span
                    className={`px-2 py-1 text-sm font-semibold rounded ${
                      assignment.status === "Completed"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200/75 text-yellow-800"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isModalOpen && selectedAssignment && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Mark Assignment</h2>
            <p>
              <strong>Assignment:</strong> {selectedAssignment.title}
            </p>
            <p>
              <strong>Examinee:</strong> {selectedAssignment.userName}
            </p>
            <a
              href={selectedAssignment.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Submission (PDF)
            </a>
            <p>
              <strong>Note:</strong> {selectedAssignment.note}
            </p>

            <div className="mt-4">
              <label htmlFor="marks" className="block font-bold">
                Marks:
              </label>
              <input
                type="number"
                id="marks"
                value={obtainMarks}
                onChange={(e) => setObtainMarks(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="feedback" className="block font-bold">
                Feedback:
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mt-4">
              <button
                onClick={() => mutate()}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Marks"}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedAssignment;
