import React, { useState } from "react";
import logo from "../assets/Images/logo.svg";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { linksData } from "./Home/links";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "./LogIn";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isSignUp, setSignUp] = useState(false);


  const setHeightZero = () => {
    setOpen(false);
  };

  const handleSignUpClick = () => {
    setSignUp(true);
    setOpenModal(true);
  };

  const handleLogInClick = () => {
    setSignUp(false);
    setOpenModal(true);
  };

  const toggleSignUp = () => {
    setSignUp(!isSignUp);
  };

  return (
    <>
      <nav className="bg-[#e2e2e2] pt-3 flex items-center">
        <div className="w-full sm:w-auto">
          <div className="flex items-center justify-between px-3">
            <img src={logo} alt="Beach Resort Logo" />
            <div className="flex items-center gap-4 sm:hidden">
              <button aria-label="User Profile">
                <FaCircleUser className="text-4xl text-blue-500" />
              </button>
              <button onClick={() => setOpen(!isOpen)} aria-label="Toggle Menu">
                <BiMenuAltLeft className="text-4xl" />
              </button>
            </div>
          </div>
          <ul
            className={`sm:h-0 ${isOpen ? "h-[8.3rem]" : "h-0"
              } mt-3 overflow-hidden transition-all duration-500`}
          >
            {linksData.map(({ id, url, name }) => (
              <li key={id}>
                <Link
                  to={url}
                  onClick={() => setHeightZero()}
                  className="block px-3 hover:bg-blue-400 hover:text-white py-2 text-[1.1rem] transition-all hover:shadow-md"
                >
                  {name}
                </Link>
              </li>
            ))}
            {!user && (
              <li className="flex justify-around border-t-[2px] border-t-gray-300 gap-6">
                <button className="text-blue-500 px-8 py-2 text-lg border hover:text-blue-600">
                  Log In
                </button>
                <button className="text-blue-500 px-8 py-2 text-lg hover:text-blue-600">
                  Sign Up
                </button>
              </li>
            )}
          </ul>
        </div>
        <ul className="hidden sm:flex flex-1 pb-2 ml-4 items-center text-lg gap-8 transition-all duration-500">
          {linksData.map(({ id, url, name }) => (
            <li key={id}>
              <Link
                to={url}
                onClick={() => setHeightZero()}
                className="hover:text-blue-500 transition-all"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        {user ? (
          <button
            className="hidden sm:block pb-3 mr-4"
            aria-label="User Profile"
          >
            <FaCircleUser className="text-4xl text-blue-500 shadow-md rounded-full" />
          </button>
        ) : (
          <div className="hidden sm:flex pb-2 gap-6 mr-4">
            <button
              className="text-blue-500 text-lg hover:text-blue-600"
              onClick={handleLogInClick}
            >
              Log In
            </button>
            <button
              className="text-blue-500 text-lg hover:text-blue-600"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>

      <LogIn
        isSignUp={isSignUp}
        openModal={openModal}
        setOpenModal={setOpenModal}
        toggleSignUp={toggleSignUp}
      />
    </>
  );
};

export default Navbar;
