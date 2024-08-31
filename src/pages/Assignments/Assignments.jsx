import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";

const AssignmentPage = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);

  return (
    <div className="container mx-auto py-16 px-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Assignments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <AssignmentsCard
            key={assignment.id}
            assignment={assignment}
          ></AssignmentsCard>
        ))}
      </div>
    </div>
  );
};

export default AssignmentPage;
