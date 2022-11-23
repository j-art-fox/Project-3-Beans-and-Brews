import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER} from '../../utils/mutations';
import Auth from '../../utils/auth';

function Register(props){
  const [formState, setFormState] = useState({email: '', password: ''})
  const [addUser] = useMutation(ADD_USER)
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const mutationResponse = await addUser({
     variables: { email: formState.email,
     firstName: formState.firstName,
     lastName: formState.lastName,
     password: formState.password,
     },
  });

  const token = mutationResponse.data.addUser.token;
  Auth.login(token)
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormState({
    ...formState,
    [name]: value,
  });
};


  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <form className="flex flex-col items-center justify-center container px-5 py-24 mx-auto" onSubmit={handleFormSubmit}>
          <div className="lg:w-1/2 md:w-2/3 text-center mb-12 rounded-lg bg-amber-100 shadow">
            <h1 className="sm:text-3xl pt-3 text-2xl font-medium title-font mb-4 text-stone-700">
              Account Creation
            </h1>
            <p className="lg:w-2/3 pb-3 mx-auto leading-relaxed text-base">
              Join the thousands earning rewards, free drinks, food, and
              refills.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full ">
                <div className="relative">
                  <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    onChange={handleChange}
                    type="firstName"
                    id="firstName"
                    name="firstName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative">
                  <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    onChange={handleChange}
                    type="lastName"
                    id="lastName"
                    name="lastName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button 
                  type="submit"
                  className="flex mx-auto text-white bg-amber-500 border-0 py-2 px-8 focus:outline-none hover:bg-amber-600 rounded text-lg"
                  >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register
