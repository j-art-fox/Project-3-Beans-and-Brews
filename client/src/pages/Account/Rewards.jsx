import React from 'react';
import Sidebar from './Sidebar';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries.js';
import QRCode from '../../images/qrcode.png';

function Rewards() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-col justify-center mx-auto mt-24 lg:w-2/5 shadow-xl">
        <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-96 md:h-64 sm:h-64 xm: w-full object-cover object-center"
            src="https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg"
            alt="blog"
          />
          <div className="p-6">
            {user ? (
              <>
                <h1 className="title-font text-lg font-medium dark:text-gray-300">
                  {user.firstName} {user.lastName}
                </h1>
                <h2 className="tracking-widest text-xs title-font font-medium dark:text-gray-500 ">
                  {user.email}
                </h2>
              </>
            ) : null}
          </div>
          <div className="w-full">
            <p className="ml-6 leading-relaxed font-semibold text-blue-900">
              POINTS ACCRUED:
              <span> No points yet!</span>
            </p>
          </div>
          <div className="flex items-center justify-around flex-wrap">
            <div className="border-2 border-dashed rounded-sm border-gray-500 mx-2">
            <img src={QRCode} alt="this is coupon" className="h-64 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards

