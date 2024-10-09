import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="relative bg-white dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto lg:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <Image
                className="w-auto h-6 sm:h-8"
                src="https://i.ibb.co.com/5YddMF2/Subtract.png"
                alt=""
                width={30}
                height={24}
              />
              <h2 className="text-3xl font-normal">
                <span className="font-bold">M</span>umair
              </h2>
            </a>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute hidden inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 lg:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                href="#"
              >
                About Me
              </a>
              <a
                className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                href="#"
              >
                Services
              </a>
              <a
                className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                href="#"
              >
                Projects
              </a>
              <a
                className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                href="#"
              >
                Testimonials
              </a>
              <a
                className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                href="#"
              >
                Contact
              </a>
            </div>
            <button
              type="button"
              className="px-4 py-1 bg-[#FD6F00] text-white rounded"
            >
              Downlaod CV
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
