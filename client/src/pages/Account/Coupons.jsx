import React from 'react'
import Sidebar from './Sidebar';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries.js';

function Coupons() {
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
                <img className="lg:h-96 md:h-64 sm:h-64 xm:h-14 w-full object-cover object-center" src="https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg" alt="blog"/>
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
                  <div className="flex items-center flex-wrap">
                    <a className="text-blue-900 font-semibold inline-flex items-center md:mb-2 lg:mb-0" href="#">Enter Coupon Code:
                    </a>
                    <input className='appearance-none mx-6 block bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  placeholder='XXXX-XXXX-XXXX-XXXX'></input>
                    <button className="appearance-none bg-amber-600 text-white px-3 py-2.5 shadow-sm rounded-md mr-3" type="submit">Enter</button>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Coupons