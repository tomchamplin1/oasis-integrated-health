import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar1() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav class=" w-full z-50 bg-white border-gray-200 px-4 md:px-16 py-2 shadow-lg">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" class="flex items-center">
          <img
            src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650922137/Oasis%20Integrated%20Health/oih-logo_dknq7g.svg"
            class="h-16"
            decoding="async"
            alt="oasis integrated health logo"
          />
        </Link>
        <div class="flex md:order-2">
          <button
            type="button"
            class="rounded hidden lg:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            <Link to="/contact">Get started -></Link>
          </button>
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class={
            "justify-between items-center w-full lg:flex md:w-auto md:order-1" +
            (navbarOpen ? " " : " hidden")
          }
          id="mobile-menu-4"
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => "block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 border-black md:hover:border-b md:border-black border-gray-100 md:bg-transparent md:p-0"  +
                  (isActive ? " text-blue-700" : " text-gray-700")
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => "block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"  +
                  (isActive ? " text-blue-700" : " text-gray-700")
                }
              >
                About
              </NavLink>
            </li>
            {/* <li>
              <a
                href="#services"
                className={({ isActive }) => "block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"  +
                  (isActive ? " text-blue-700" : " text-gray-700")
                }
              >
                Services
              </a>
            </li> */}
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) => "block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"  +
                  (isActive ? " text-blue-700" : " text-gray-700")
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) => "block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"  +
                  (isActive ? " text-blue-700" : " text-gray-700")
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => "block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"  +
                  (isActive ? " text-blue-700" : " text-gray-700")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
