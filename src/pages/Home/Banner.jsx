const Banner = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/010/881/664/non_2x/education-people-person-book-illustration-concept-business-background-character-school-student-knowledge-learning-web-library-reading-group-training-course-banner-graduation-class-vector.jpg')" }}>
      </div>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Banner Content */}
      <div className="relative z-10 text-center px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-medium mb-4 leading-tight">
          Collaborate, Learn, and Grow Together
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Join your friends in group study sessions, complete assignments, and enhance your knowledge!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/assignments"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 font-medium"
          >
            Start Learning
          </a>
          <a
            href="/create-assignment"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300 font-medium"
          >
            Create Assignment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
