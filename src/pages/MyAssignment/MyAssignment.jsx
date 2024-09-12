import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const MyAssignments = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const {
    data: assignments,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["my-assignments"],
    queryFn: async () => {
      const res = await axios.get(`/user/my-assignments?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading assignments.</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl text-center font-bold mb-8">My Assignments</h1>

      {assignments?.length === 0 ? (
        <p>No assignments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Assignment Title</th>
                <th className="py-2 px-4 border">Total Marks</th>
                <th className="py-2 px-4 border">Obtained Marks</th>
                <th className="py-2 px-4 border max-w-xs">Feedback</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td className="py-2 px-4 border">{assignment.title}</td>
                  <td
                    className={`py-2 px-4 border text-center ${
                      assignment.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {assignment.marks}
                  </td>
                  <td className="py-2 px-4 text-center border">
                    {assignment.obtainMarks || "N/A"}
                  </td>
                  <td className="py-2 px-4 border max-w-96 overflow-hidden">
                    {assignment.feedback || "N/A"}
                  </td>
                  <td className="py-2 px-4 border">
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
        </div>
      )}
    </div>
  );
};

export default MyAssignments;
