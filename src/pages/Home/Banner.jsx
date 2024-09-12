import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full h-[650px] flex items-center justify-center text-white overflow-hidden bg-gradient-to-r from-blue-800 to-blue-600"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Collaborate, Learn, and Grow Together
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join your friends in group study sessions, complete assignments, and
          enhance your knowledge!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg transition duration-300 font-semibold shadow-lg transform hover:scale-105"
          >
            Start Learning
          </a>
          <Link
            to={"/create-assignment"}
            className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg transition duration-300 font-semibold shadow-lg transform hover:scale-105"
          >
            Create Assignment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
