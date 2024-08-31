import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AssignmentsCard = ({ assignment }) => {
  const { id, title, marks, thumbnailImageUrl, difficultyLevel } = assignment;

  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden transition duration-300 hover:shadow-lg flex flex-col">
      {/* Thumbnail Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 flex justify-center items-center">
        <img
          src={thumbnailImageUrl}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col ">
        <h2 className="text-xl font-bold  text-gray-800 line-clamp-2">
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
            to={`/assignment-details/${id}`}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Assignment
          </Link>

          <button className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
            Update Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

AssignmentsCard.propTypes = {
  assignment: PropTypes.object,
};

export default AssignmentsCard;
