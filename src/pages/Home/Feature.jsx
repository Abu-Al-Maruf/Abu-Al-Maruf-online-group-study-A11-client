import { IoMdCreate, IoMdTrendingUp, IoMdStar, IoMdLock, IoMdPhonePortrait } from 'react-icons/io';

const features = [
  {
    title: "Create Assignments",
    description: "Easily create assignments with detailed information and due dates.",
    icon: <IoMdCreate />,
    color: "text-green-500",
  },
  {
    title: "Track Progress",
    description: "Keep track of assignment progress and see which assignments are completed.",
    icon: <IoMdTrendingUp />,
    color: "text-yellow-500",
  },
  {
    title: "Grade Assignments",
    description: "Grade your friends' assignments and provide feedback.",
    icon: <IoMdStar />,
    color: "text-red-500",
  },
  {
    title: "Social Login",
    description: "Register and log in using social login options like Google.",
    icon: <IoMdLock />,
    color: "text-purple-500",
  },
  {
    title: "Responsive Design",
    description: "Access your assignments and manage tasks from any device.",
    icon: <IoMdPhonePortrait />,
    color: "text-blue-500",
  },
];

const Feature = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg text-center transition-transform transform hover:scale-105"
          >
            <div className={`text-4xl mb-2 ${feature.color}`}>{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Feature;
