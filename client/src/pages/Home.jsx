import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container flex flex-col">
      {/* Hero */}
      <section className="custom-hero-image flex flex-col justify-start items-center text-center h-[55vh] w-screen text-white font-bold bg-slate-300 p-5">
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
          <h2 className="text-4xl font-bold border-4 border-black border-solid p-4 rounded-lg">
            Beans for All
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 grid-rows-3">
          <section className="box-border container mx-auto flex justify-center items-center mb-10">
            <div className="custom-home-card-1 h-80 p-6">
              <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-4 text-white transition-all">
                <h3 className="text-3xl font-bold my-1">
                  What's your special drink?
                </h3>
                <p className="text-xl my-1 custom-para">
                  Roasting worth boasting! Grab a fresh bag of Beans & Brews
                  High Altitude Roasted™ coffee and enjoy the smoother, richer
                  flavor that comes from roasting in Salt Lake’s mountain air.
                </p>
                <button className="bg-amber-600 hover:bg-gray-900 w-1/2 p-3 text-white rounded-lg ease-in-out duration-300">
                  <a className="flex justify-center items-center" href="/menu ">
                    Order Now
                    <FaChevronRight className="ml-2" />
                  </a>
                </button>
              </div>
            </div>
          </section>
          <section className="box-border container mx-auto flex justify-center items-center my-10">
            <div className="custom-home-card-2 h-80 p-6 w-full">
              <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-4 text-white">
                <h3 className="text-3xl font-bold my-1">
                  Sweet, sweet rewards.
                </h3>
                <p className="text-xl my-1 custom-para">
                  Join our House Rewards™ loyalty program—it’s on a simple app.
                </p>
                <div className="flex flex-col transition-all">
                  <a
                    className="flex flex-row items-center ease-in-out duration-300 hover:text-amber-600 font-bold"
                    href="https://play.google.com/store/apps/details?id=com.beansandbrews.beansandbrews.android.app&hl=en_US&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download on Google Play
                    <FaChevronRight className="ml-2" />
                  </a>
                  <a
                    className="flex flex-row items-center ease-in-out duration-300 hover:text-amber-600 font-bold"
                    href="https://apps.apple.com/us/app/beans-brews/id902029819"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download on Apple Store
                    <FaChevronRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="box-border container mx-auto flex justify-center items-center my-10">
            <div className="custom-home-card-3 h-80 p-6">
              <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-4 text-white transition-all">
                <h3 className="text-3xl font-bold my-1">Our Coffee.</h3>
                <p className="text-xl my-1 custom-para">
                  There are two main species of coffee beans: Robusta and
                  Arabica. Since Robusta beans are cheaper to grow, they’re
                  often used for commercial and instant coffee. But Arabica is
                  the good stuff: it only grows at very certain altitudes, and
                  only in just the right conditions. But it’s worth the extra
                  effort—these trees produce beans with an aromatic and rich
                  flavor. That’s why most gourmet coffee, including our very own
                  beans, comes from Arabica plants. We wouldn’t have it any
                  other way.
                </p>
                <button className="bg-amber-600 hover:bg-gray-900 w-1/2 p-3 text-white rounded-lg ease-in-out duration-300">
                  <a
                    className="flex justify-center items-center"
                    href="/ourcoffee "
                  >
                    Learn More
                    <FaChevronRight className="ml-2" />
                  </a>
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
