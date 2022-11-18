import { Link } from "react-router-dom";
import  Auth  from "../../../src/utils/auth";
import logo from "../../images/Horz-Wht-1024x139.png";

// if not logged in there is the signin button
// if logged in there is the account button

export default function Navbar() {

  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
           <li>
                <Link
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white hover:font-bold bg-stone-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white dark:bg-stone-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Account
                </Link>
              </li>
          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
              onClick={() => Auth.logout()}
            >
              Sign out
            </button>
          </div>
        </ul>
      );
    } 
    // if not logged in
    else {
      return (
        <ul className="flex-row">
          {/* <div class="flex md:order-2"> */}
            <Link to="/">
            <button
              type="button"
              class="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
              
            >
              Sign in
            </button>
            </Link>
          {/* </div> */}
        </ul>
      );
    }
  }
  

  return (
    <>
      <nav class="bg-amber-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" class="flex items-center">
            <img
              src={logo}
              class="h-6 mr-3 sm:h-9"
              alt="Beans and Brews Logo"
            />
          </Link>

          {/* SIGN IN BUTTON */}
          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
            >
              Sign in
            </button>
          </div>

          {/* MAIN MENU */}
          {/* Mobile Responsive Main Menu Button */}
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-amber-600 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-amber-600 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* home button */}
              <li>
                <Link
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white hover:font-bold bg-stone-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white dark:bg-stone-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white hover:font-bold bg-stone-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white dark:bg-stone-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Account
                </Link>
              </li>

              {/* Menu Button */}
              <li>
                <Link
                  to="/menu"
                  class="block py-2 pl-3 pr-4 text-white hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Menu
                </Link>
              </li>
              
              {/* Our Coffee Button */}
              <li>
                <Link
                  to="/ourcoffee"
                  class="block py-2 pl-3 pr-4 text-white hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Our Coffee
                </Link>
              </li>

              {/* Contact Button */}
              <li>
                <Link
                  to="/contact"
                  class="block py-2 pl-3 pr-4 text-white hover:font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

