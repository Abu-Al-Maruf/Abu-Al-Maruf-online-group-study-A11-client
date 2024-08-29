import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [photoURL, setPhotoURL] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, photoURL, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2   items-center gap-4 max-w-6xl w-full">
        {/* left side form  */}
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-xl max-md:mx-auto">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="mb-4 text-center">
              <h3 className="text-gray-800 text-2xl font-bold">Register</h3>
              <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">
                Register to create your account and explore a world of
                possibilities.
              </p>
            </div>

            {/* name  */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input
                type="text"
                required
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* email  */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                required
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* photo url  */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Photo URL
              </label>
              <input
                type="url"
                required
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                placeholder="Enter your photo URL"
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>

            {/* password  */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center ">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 cursor-pointer text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block cursor-pointer text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="!mt-6">
              <button
                type="submit"
                className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Register
              </button>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                type="button"
                className="flex items-center justify-center w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none"
              >
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </div>

            <p className="text-sm !mt-8 text-center text-gray-800">
              Already have an account?
              <Link
                to={"/login"}
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Log in here
              </Link>
            </p>
          </form>
        </div>

        {/* right side  */}
        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;