import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center py-5">
        {/* Company Section */}
        <div className="w-full md:w-auto">
          <h4 className="text-xl font-bold mb-2">Company</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press kit
              </a>
            </li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <h4 className="text-xl font-bold mb-2">Explore</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Enterprise
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <h4 className="text-xl font-bold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/assignments" className="hover:underline">
                All Assignments
              </a>
            </li>
            <li>
              <a href="/create-assignment" className="hover:underline">
                Create Assignment
              </a>
            </li>
            <li>
              <a href="/my-assignments" className="hover:underline">
                My Assignments
              </a>
            </li>
            <li>
              <a href="/submitted-assignments" className="hover:underline">
                Submitted Assignments
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex justify-end mt-4 md:mt-0 w-full md:w-auto">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-600 text-xl mx-2"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-600 text-xl mx-2"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-600 text-xl mx-2"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-blue-600 text-xl mx-2"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6">
        <p className="text-sm">
          © 2024 Online Group Study. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
