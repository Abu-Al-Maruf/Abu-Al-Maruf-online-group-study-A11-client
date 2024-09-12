import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"; // Importing delete icon
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AssignmentsCard = ({ assignment }) => {
  const { _id, title, marks, thumbnailUrl, difficultyLevel } = assignment;
  const axios = useAxios();
  const { user } = useAuth();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["assignments"],
    mutationFn: (_id) => {
      return axios.delete(`/user/delete-assignment/${_id}?email=${user.email}`);
    },
    onSuccess: (data) => {
      if (data?.data.deletedCount === 1) {
        toast.success("Assignment deleted successfully!");
      }
      queryClient.invalidateQueries({ queryKey: ["assignments"] });
    },
    onError: (error) => {
      console.log(error);
      if (error?.response?.status === 401) {
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden transition duration-300 hover:shadow-lg flex flex-col relative">
      {/* Thumbnail Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 flex justify-center items-center">
        <img
          src={thumbnailUrl}
          alt={title}
          className="object-cover h-full w-full"
        />
        {user && (
          <button
            onClick={() => mutate(_id)}
            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-800 hover:scale-110 transition duration-300"
          >
            <FaTrash />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-2">
          Marks: <span className="font-medium text-gray-800">{marks}</span>
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
          Difficulty:{" "}
          {difficultyLevel.charAt(0).toUpperCase() + difficultyLevel.slice(1)}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row justify-between gap-2">
          <Link
            to={`/assignment-details/${_id}`}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Assignment
          </Link>

          <Link
            to={`/update-assignment/${_id}`}
            className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Update Assignment
          </Link>
        </div>
      </div>
    </div>
  );
};

AssignmentsCard.propTypes = {
  assignment: PropTypes.object.isRequired,
};

export default AssignmentsCard;
