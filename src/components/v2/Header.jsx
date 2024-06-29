import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/lamp.svg";

const Header = () => {
  return (
    <header className="sticky top-0 py-2 z-50 shadow-md w-full flex justify-between items-center bg-white text-gray-600 text-sm md:text-lg p-4 font-poppins px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div>
        <Link to={"/"}>
          <div className="cursor-pointer flex items-center justify-center gap-2 text-2xl ">
            <button
              type="button"
              className="flex items-center justify-center  px-2 py-2.5 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 w-auto hover:bg-gray-100 text-center me-2 mb-2"
            >
              <span>
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </span>
              <span className="hidden md:block">Retour</span>
            </button>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" />
      </div>

      <div className="cursor-pointer flex items-center justify-center gap-2 text-2xl ">
        <button
          type="button"
          className="flex items-center justify-center px-2 py-2.5 text-sm text-yellow-500 transition-colors duration-200 bg-white border border-yellow-500 rounded-lg gap-x-2 w-auto hover:bg-yellow-100 text-center me-2 mb-2"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 w-5 h-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          <span className="hidden md:block">Investir</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
