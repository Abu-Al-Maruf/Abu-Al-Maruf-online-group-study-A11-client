import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const UpdateAssignment = () => {
  const [difficulty, setDifficulty] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const { id } = useParams();
  const axios = useAxios();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Fetch the assignment data
  const { data: assignment, isFetching } = useQuery({
    queryKey: ["assignment", id],
    queryFn: async () => {
      const res = await axios.get(`/assignments/${id}`);
      return res.data;
    },
  });

  // Destructure the assignment data
  const {
    title,
    thumbnailUrl,
    marks,
    difficultyLevel,
    description,
    dueDate: apiDueDate,
  } = assignment || {};

  // Set the default values when assignment data is loaded
  useEffect(() => {
    if (assignment) {
      setDifficulty(difficultyLevel);
      setDueDate(new Date(apiDueDate)); // Convert the string date to a Date object
    }
  }, [assignment, difficultyLevel, apiDueDate]);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  // Define the mutation function to update the assignment
  const { mutate } = useMutation({
    mutationFn: async (updatedAssignment) => {
      return axios.put(
        `/user/update-assignment/${id}?email=${user.email}`,
        updatedAssignment
      );
    },
    onSuccess: () => {
      toast.success("Assignment updated successfully");
      navigate("/assignments");
    },
    onError: (error) => {
      console.log(error);
      if (error?.response?.status === 401) {
        toast.error(error.response.data.message);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const thumbnailUrl = form.thumbnailUrl.value;
    const marks = form.marks.value;
    const description = form.description.value;

    const updatedAssignment = {
      title,
      thumbnailUrl,
      marks,
      difficultyLevel: difficulty,
      description,
      dueDate,
    };

    mutate(updatedAssignment);
  };

  return (
    <section className="mx-auto py-10 px-8 w-full">
      <div className="w-4/5 border mx-auto p-10 rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Update Assignment
        </h2>

        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} key={id}>
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
                  name="title"
                  defaultValue={title}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter title"
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
                  name="thumbnailUrl"
                  defaultValue={thumbnailUrl}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter thumbnail image URL"
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
                  name="marks"
                  defaultValue={marks}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter marks"
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
                  name="difficultyLevel"
                  value={difficulty}
                  onChange={handleDifficultyChange}
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
                  name="description"
                  defaultValue={description}
                  className="w-full resize-none px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter description"
                  required
                  rows={5}
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
                  onChange={handleDateChange}
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
              Update Assignment
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default UpdateAssignment;
