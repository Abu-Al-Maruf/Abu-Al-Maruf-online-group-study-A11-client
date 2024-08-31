import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marks, setMarks] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("easy");
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      title,
      description,
      marks,
      thumbnailUrl,
      difficultyLevel,
      dueDate
    );
  };

  return (
    <section className="mx-auto py-10 px-8 w-full">
      <div className="w-4/5 border mx-auto p-10 rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Assignment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="thumbnailUrl"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Thumbnail Image URL
              </label>
              <input
                type="text"
                id="thumbnailUrl"
                onChange={(e) => setThumbnailUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="marks"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Marks
              </label>
              <input
                type="number"
                id="marks"
                onChange={(e) => setMarks(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="difficultyLevel"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Difficulty Level
              </label>
              <select
                id="difficultyLevel"
                onChange={(e) => setDifficultyLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="mb-4 md:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                className="w-full resize-none px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                rows={5} // This sets a fixed height for the textarea
              />
            </div>

            <div className="mb-4 md:col-span-2">
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Due Date
              </label>

              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                dateFormat="dd/MM/yyyy"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Create Assignment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateAssignment;