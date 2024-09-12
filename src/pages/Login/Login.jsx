import { useState } from "react";
import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await loginUser(email, password);
      // implement jwt here
      const { data } = await axios.post("/jwt", { email: res?.user?.email });
      console.log(data);
      console.log(res.user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await googleLogin();
      // implement jwt here
      const { data } = await axios.post("/jwt", { email: res?.user?.email });
      console.log(data);
      console.log(res.user);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleGithubLogin = async () => {
    try {
      const res = await githubLogin();
      console.log(res.user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        {/* left side form  */}
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-xl max-md:mx-auto">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="mb-4 text-center">
              <h3 className="text-gray-800 text-2xl font-bold">Login</h3>
              <p className="text-gray-500 text-sm mt-2 font-medium leading-relaxed">
                Log in to access your account and explore a world of
                possibilities.
              </p>
            </div>

            {/* email */}
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
            {/* password */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
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
                Log in
              </button>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="flex items-center justify-center w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button
                onClick={handleGithubLogin}
                type="button"
                className="flex items-center justify-center w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none"
              >
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </div>

            <p className="text-sm !mt-8 text-center text-gray-800">
              Don&#39;t have an account?
              <Link
                to={"/register"}
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Sign up here
              </Link>
            </p>
          </form>
        </div>

        {/* right side */}
        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
