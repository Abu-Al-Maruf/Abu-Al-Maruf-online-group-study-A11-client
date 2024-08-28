import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={`({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        `}
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
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link to={"/"} className="text-2xl font-bold tracking-wider">
          <img className="w-14 sm:w-20" src={logo} alt="logo" />
        </Link>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-2xl font-bold"
          >
            {isOpen ? <IoMdClose /> : <IoMenuSharp />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          ref={navRef}
          className={`${
            isOpen ? "flex flex-col items-center" : "hidden"
          } lg:flex lg:flex-row lg:space-x-6 font-medium absolute lg:static top-16 sm:top-24 left-0 w-full lg:w-auto lg:bg-transparent lg:top-auto lg:left-auto p-4 lg:p-0 bg-slate-300 transition-all duration-300 ease-in-out z-50`}
        >
          {navLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
