import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

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
    } catch (e) {
      console.log(e);
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
    <div className="container h-screen flex flex-col">
      {/* Form */}
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-center items-center h-1/2 w-screen"
      >
        <div className="h-auto w-full mx-auto py-10 sm:w-3/4 md:w-1/2 2xl:w-2/5 shadow-lg p-5 rounded-md">
          <div className="flex flex-col justify-center">
            <h4 className="text-5xl mb-10 text-center">Log in</h4>
            <input
              type="email"
              className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="form-email"
              placeholder="youremail@test.com"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control block w-full px-4 py-2 mb-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="form-password"
              placeholder="Password"
              onChange={handleChange}
            />
            {error ? (
              <div className="text-center text-xl mb-2">
                <p className="error-text">
                  The provided credentials are incorrect. Try again.
                </p>
              </div>
            ) : null}
            <div className="flex flex-col justify-center items-center ">
              <button
                className="bg-amber-600 w-1/4 py-3 rounded-lg text-center text-white mb-4 hover:bg-gray-900 ease-in-out duration-200 transition-all"
                type="submit"
              >
                Login
              </button>
              <p>
                Don't have an account?{' '}
                <a className="text-amber-600 font-bold" href="/signup">
                  Sign up
                </a>
              </p>
            </div>

            <div id="warning"></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
