import { QUERY_USER } from '../../utils/queries.js';
import { useQuery } from '@apollo/client';
import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaPiggyBank } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
  // try {
    const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  console.log(user);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <>
    <div
      id="view"
      className="h-full flex flex-row"
      x-data="{ sidenav: true }"
    >
      <button
        // @click="sidenav = true"
        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-slate-900 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
      >
        <svg
          className="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="sidebar"
        className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
        // @click.away="sidenav = false"
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          <h1 className="font-bold text-4xl text-center md:hidden">
            Account<span className="text-teal-600"></span>
          </h1>
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            Account<span className="text-teal-600"></span>
          </h1>
          <div id="profile" className="flex text-center flex-col justify-center items-center space-y-3">
            <FaUser className="items-center"/>
            {user ? (
              
            <div>
              <h2
                className="uppercase font-medium text-xs md:text-sm text-center text-blue-900"
              > 
              {user.firstName} {user.lastName}
              </h2>
              <p className="text-xs text-gray-500 text-center">
              {user.email}
              </p>
            </div>
            ) : null}
              
          </div>
      
            <button
              className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block"
            >
              <svg
                className="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
            </button>
          </div>
          <div id="menu" className="flex flex-col space-y-2">
            <Link to='/dashboard' 
            className="flex flex-row text-sm font-medium text-gray-700 py-2 px-2 hover:bg-slate-900 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span className="">Dashboard</span>
            </Link>
            <Link to='/rewards'
            className="flex flex-row text-sm font-medium text-gray-700 py-2 px-2 hover:bg-slate-900 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <FaPiggyBank className="mx-1 flex justify-center items-center"/>
                <path
                  d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                ></path>
              
              <span className="">Rewards</span>
            </Link>
            <Link to='/settings'
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-slate-900 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="">Settings</span>
            </Link>
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
          </div>
        </div>
      </div>

    {/* <script src="js/graph.js" type="text/javascript"></script>
    <script>
      var user = document.getElementById("user-chart").nodeName;
      var chart = new Graph({
        data: [1, 20, 5, 6, 8],
        target: document.querySelector(user),
      });
    </script> */}
    </>
  );
};

export default Sidebar