import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, logOut } = useAuth();

  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowProfile(false);
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
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/create-assignment"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        Create Assignments
      </NavLink>
      <NavLink
        to="/all-assignments"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        All Assignments
      </NavLink>

      <NavLink
        to="/my-assignment"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        My Assignments
      </NavLink>
      <NavLink
        to="/submitted-assignment"
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
            : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
        }
      >
        Submitted Assignment
      </NavLink>
      {!user && (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
                : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "block py-2 text-green-700 underline underline-offset-4 transition duration-300"
                : "block py-2 text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
            }
          >
            Register
          </NavLink>
        </>
      )}
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
        <div className="flex items-center gap-1 md:gap-8">
          <div
            ref={navRef}
            className={`${
              isOpen ? "flex flex-col items-center" : "hidden"
            } lg:flex lg:flex-row lg:space-x-6 font-medium absolute lg:static top-16 sm:top-24 left-0 w-full lg:w-auto lg:bg-transparent lg:top-auto lg:left-auto p-4 lg:p-0 bg-slate-300 transition-all duration-300 ease-in-out z-50`}
          >
            {navLinks}
          </div>
          {/* User Image and Hover Menu */}
          {user && (
            <div className="relative flex flex-col justify-center items-center">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                }
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
              />
              <NavLink
                to="/"
                className="block font-semibold text-gray-800 hover:text-green-700 hover:underline underline-offset-4 transition duration-300"
                onClick={() => logOut()}
              >
                LogOut
              </NavLink>
              {/* Hover Menu */}
              {showProfile && (
                <div className="absolute w-36 top-[70px] bg-blue-200 shadow-lg rounded-md transition-opacity duration-300 z-50">
                  <div className=" py-2  text-center">
                    <p className="text-gray-800 font-medium">
                      {user?.displayName}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
