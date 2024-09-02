import AssignmentsCard from "./AssignmentsCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

const AssignmentPage = () => {
  const axios = useAxios();

  const { data: assignments } = useQuery({
    queryKey: ["assignments"],
    queryFn: () => {
      return axios.get("/assignmnets");
    },
  });

  return (
    <div className="container mx-auto py-16 px-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Assignments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments?.data?.map((assignment) => (
          <AssignmentsCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentsCard>
        ))}
      </div>
    </div>
  );
};

export default AssignmentPage;
