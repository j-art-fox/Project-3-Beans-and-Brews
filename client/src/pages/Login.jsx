import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { FaCoffee } from 'react-icons/fa';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password }
      });

      const token = mutationResponse.data.login.token;

      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { type, value } = event.target;
    setFormState({
      ...formState,
      [type]: value
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <form
          className="flex flex-col items-center justify-center container px-5 py-24 mx-auto"
          onSubmit={handleFormSubmit}
        >
          <div className="lg:w-1/2 md:w-2/3 w-full text-center mb-12 rounded-lg bg-amber-100 shadow">
            <h1 className="sm:text-3xl pt-3 text-2xl font-medium title-font mb-4 text-stone-700">
              Login
            </h1>
            <p className="flex flex-row justify-center items-center lg:w-2/3 pb-3 mx-auto leading-relaxed text-base">
              Welcome back to bean land<FaCoffee className='ml-1'/>
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full ">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-amber-600 transition-all ease-in-out duration-200 border-0 py-2 px-8 focus:outline-none hover:bg-amber-500 rounded text-lg"
                >
                  Log in
                </button>
                <p className="text-center mt-2 dark:text-dark-500">
                  Don't have an account?{' '}
                  <a
                    className="text-amber-600 transition-all ease-in-out duration-200 hover:text-amber-500 font-bold"
                    href="/signup"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
