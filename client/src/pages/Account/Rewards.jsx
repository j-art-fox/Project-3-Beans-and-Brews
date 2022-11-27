import React from 'react';
import Sidebar from './Sidebar';

const Rewards = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <div className="flex-col justify-center mx-auto mt-24 w-2/5">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-96 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg" alt="blog"/>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">INSERT NAME</h1>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INSERTEMAIL@EMAIL.COM</h2>
                  <p className="leading-relaxed mb-3 mt-2 font-semibold text-blue-900">POINTS ACCRUED:
                  <span> No points yet!</span></p>
                  <div className="flex items-center flex-wrap">
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Rewards