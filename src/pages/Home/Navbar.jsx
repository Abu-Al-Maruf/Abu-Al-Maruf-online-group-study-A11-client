import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/a"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        Assignments
      </NavLink>
      <NavLink
        to="/a"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        Create Assignments
      </NavLink>
      <NavLink
        to="/a"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        My Assignments
      </NavLink>
      <NavLink
        to="/a"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        Submitted Assignments
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-gray-200 to-gray-300/90 text-green-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="text-2xl font-bold tracking-wider">
          <img className=" w-14 sm:w-20" src={logo} alt="logo" />
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-xl font-bold"
          >
            {isOpen ? <IoMdClose /> : <IoMenuSharp />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 font-medium absolute md:static top-16 left-0 w-full md:bg-transparent md:top-auto md:left-auto p-4 md:p-0 text-center md:text-left transition-all duration-300 ease-in-out md:w-auto`}
        >
          {navLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
