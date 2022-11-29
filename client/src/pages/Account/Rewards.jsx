import React from 'react';
import Sidebar from './Sidebar';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries.js';
import CouponCode from '../../images/qrcode.png';

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
                <h1 className="title-font text-lg font-medium text-gray-500">
                  {user.firstName} {user.lastName}
                </h1>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3">
                  {user.email}
                </h2>
              </>
            ) : null}
          </div>
          <div className="w-full">
            <p className="leading-relaxed mb-3 mt-2 font-semibold text-blue-900 p-6">
              POINTS ACCRUED:
              <span> No points yet!</span>
            </p>
          </div>
          {/* r e w a r d s bro */}
          <div className="flex items-center justify-around flex-wrap">
            <div className="border-2 border-dashed rounded-sm border-gray-500 mx-2">
            <img src={CouponCode} alt="this is coupon" class="h-64 mx-auto" />
            </div>
            <div className="border-2 border-dashed rounded-sm border-gray-500 mx-2">
            <img src={CouponCode} alt="this is coupon" class="h-64 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards

