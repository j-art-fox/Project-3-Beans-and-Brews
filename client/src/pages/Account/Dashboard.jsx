import React from 'react'
import Sidebar from './Sidebar';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries.js';

function Dashboard() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }

  return (
    <div className="flex">
    <Sidebar/>
    <div className="flex-col justify-center mx-auto mt-24 w-2/5 shadow-xl">
              <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-96 md:h-64 sm:h-64 xm:h-14 w-full object-cover object-center" src="https://images.pexels.com/photos/2228889/pexels-photo-2228889.jpeg" alt="blog"/>
                <div className="p-6">
                  {user ? (
                  <>
                  <h1 className="title-font text-lg font-medium dark:text-gray-300">
                    {user.firstName} {user.lastName}
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium dark:text-gray-500 mb-3">
                    {user.email}
                  </h2>
                  </>
                  ) : null}
                  <div className="flex items-center flex-wrap ">
                    <a className="text-blue-900 font-semibold inline-flex items-center md:mb-2 lg:mb-0" href="#">Payment Method
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Dashboard