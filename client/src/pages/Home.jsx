import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Google from '../images/google-play-badge.png';
import Apple from '../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

const Home = () => {
  return (
    <div className="container flex flex-col">
      {/* Hero */}
      <section className="custom-hero-image flex flex-col justify-start items-center text-center h-[50vh] w-screen text-white font-bold bg-slate-300 p-5">
        <h1 className="text-5xl mt-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
          The Holiday Favorites are back!
        </h1>
        <p className="text-xl w-3/4 [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
          Peppermint Mocha, Eggnog Latte, and the Pumpkin Pie Fritalia® are here
          for the holidays! Try one today! Order Now!
        </p>
      </section>
      <section className="flex flex-col justify-center items-center w-screen">
        <div className="my-10">
          <h2 className="text-4xl font-bold">Bean Give you Choose</h2>
        </div>
        <section className="box-border custom-home-card-image container mx-auto flex justify-center items-center my-10">
          <div className="custom-home-card-1 h-80 p-6">
            <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-4 text-white">
              <h3 className="text-3xl font-bold my-1">
                What's your special drink?
              </h3>
              <p className="text-xl my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quam assumenda consequuntur, explicabo repellendus reprehenderit
                sequi incidunt nulla cupiditate dicta.
              </p>
              <button className="bg-white w-1/2 p-3 text-black rounded-lg">
                <a className="flex justify-center items-center" href="/menu ">
                  Order Now
                  <FaChevronRight className="ml-2" />
                </a>
              </button>
            </div>
          </div>
        </section>
        <section className="box-border custom-home-card-image container mx-auto flex justify-center items-center my-10">
          <div className="custom-home-card-2 h-80 p-6">
            <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-4 text-white">
              <h3 className="text-3xl font-bold my-1">Sweet, sweet rewards.</h3>
              <p className="text-xl my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quam assumenda consequuntur, explicabo repellendus reprehenderit
                sequi incidunt nulla cupiditate dicta.
              </p>
              <img src={Google} className="w-1/2 text-black"/>
              <img src={Apple} className="w-1/2 text-black"/>

            </div>
          </div>
        </section>
        <section className="box-border custom-home-card-image container mx-auto flex justify-center items-center my-10">
          <div className="custom-home-card-3 h-80 p-6">
            <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-4 text-white">
              <h3 className="text-3xl font-bold my-1">
                What's your special drink?
              </h3>
              <p className="text-xl my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                quam assumenda consequuntur, explicabo repellendus reprehenderit
                sequi incidunt nulla cupiditate dicta.
              </p>
              <button className="bg-white w-1/2 p-3 text-black rounded-lg">
                <a className="flex justify-center items-center" href="/menu ">
                  Order Now
                  <FaChevronRight className="ml-2" />
                </a>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
