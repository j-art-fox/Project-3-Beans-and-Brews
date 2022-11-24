import React from 'react';
import Auth from '../utils/auth'

const loggedIn = true;

const Home = () => {
  return (
    <div className="container h-screen flex flex-col">
      {/* Hero */}
      <section className="custom-hero-image flex flex-col justify-start items-center text-center h-1/2 w-screen text-white font-bold bg-slate-300 p-5">
        <h1 className="text-5xl mt-20">The Holiday Favorites are back!</h1>
        <p className="text-xl w-3/4">
          Peppermint Mocha, Eggnog Latte, and the Pumpkin Pie Fritalia® are here
          for the holidays! Try one today! Order Now!
        </p>
      </section>

      {/* Form */}
      {loggedIn ? (
        <section className="flex justify-center items-center h-1/2 w-screen">
          <div className="h-auto w-full mx-auto py-10 sm:w-3/4 md:w-1/2 2xl:w-2/5 shadow-lg p-5 rounded-md">
            <form id="login" className="flex flex-col justify-center">
              <h4 className="text-5xl mb-10 text-center">Sign in</h4>
              <input
                type="email"
                className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="form-email"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="form-password"
                placeholder="Password"
              />
              <div className="flex flex-col justify-center items-center ">
                <button
                  className="bg-amber-600 w-1/4 py-3 rounded-lg text-center text-white mb-4 hover:bg-gray-900 ease-in-out duration-200 transition-all"
                  type="submit"
                  onClick={() => Auth.login()}
                >
                  Login
                </button>
                <p>
                  Don't have an account{' '}
                  <a className="text-amber-600 font-bold" href="/register">
                    Register.
                  </a>
                </p>
              </div>

              <div id="warning"></div>
            </form>
          </div>
        </section>
      ) : (
        <section className="flex justify-center items-center h-1/2 w-screen">
          <div className="h-auto w-full mx-auto py-10 sm:w-3/4 md:w-1/2 2xl:w-2/5 shadow-lg p-5 rounded-md">
            <form id="login" className="flex flex-col justify-center">
              <h4 className="text-5xl mb-10 text-center">Register</h4>
              <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="form-username"
                placeholder="Username"
              />
              <input
                type="email"
                className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="form-email"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="form-password"
                placeholder="Password"
              />
              <div className="flex flex-col justify-center items-center ">
                <button
                  className="bg-amber-600 w-1/4 py-3 rounded-lg text-center text-white mb-4 hover:bg-gray-900 ease-in-out duration-200 transition-all"
                  type="submit"
                >
                  Login
                </button>
                <p>
                  Already have an account{' '}
                  <a className="text-amber-600 font-bold" href="/register">
                    Login.
                  </a>
                </p>
              </div>

              <div id="warning"></div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
