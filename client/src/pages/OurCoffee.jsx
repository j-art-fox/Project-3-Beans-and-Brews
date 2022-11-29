import { FaGlassMartini, FaGrinTongue, FaGrinTongueWink } from "react-icons/fa";
import React from "react";

const OurCoffee = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">How High-Altitude Roasting™ Works
            </h1>
            <p className="mb-8 leading-relaxed dark:text-dark-500">  As you can imagine, coffee roasting is a complex art. Back when we
              started in the early nineties, our founders worked hard to master
              it, but they learned the way most coffee is roasted—at sea
              level—just doesn’t work here in Salt Lake. It took a while to
              realize why: roasting at altitude works differently… but, if you
              figure it out, it works deliciously. In general, roasting beans
              too hot or too long results in scorched or “baked” coffee—to avoid
              this, you want to roast them at the lowest possible temperature
              for the least possible amount of time. In the higher, thinner air
              of our mountain valley, this is much easier. And we can achieve a
              smoother, more intense flavor than you could anywhere else.</p>
            <div className="flex justify-center transition-all">
              <a href="https://www.youtube.com/watch?v=XltzFNeLkXQ&feature=youtu.be" target="_blank" media="screen">
              <button className="inline-flex text-white font-bold bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded text-lg ease-in-out duration-300">Learn More</button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-5/6">
            <img className="object-contain object-center rounded-xl" alt="hero" src="https://images.pexels.com/photos/3932951/pexels-photo-3932951.jpeg"/>
          </div>
        </div>
      </section>
       

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 dark:text-white">
              FBA: Our Special Coding System for Coffee Flavor Profiles
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s dark:text-dark-500">
              You already know—we’re nuts about beans. So we developed our own
              special system to measure the flavor, body, and acidity (FBA) of
              our brews. It helps us explain our different roasts to our guests,
              whether you’re stopping in for a hot brew or picking up a bag of
              beans to take home.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5 flex-shrink-0">
                <FaGrinTongue className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">
                  Flavor
                </h2>
                <ul className="text-stone-900 text-lg pl-3 title-font font-bold mb-3 text-left dark:text-white">
                  <li>F1 Mellow</li>
                  <li>F2 Medium</li>
                  <li>F3 Intense</li>
                </ul>
                <p className="leading-relaxed text-base dark:text-dark-500">
                  Just as you’d think: “flavor” describes the taste and aroma of
                  the coffee. You might not even realize it consciously, but you
                  notice it immediately. Flavor is a matter of preference—maybe
                  you like sipping something mellow, or maybe you dig a deep,
                  intense flavor.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5 flex-shrink-0">
                <FaGlassMartini className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">
                  Body
                </h2>
                <ul className="text-amber-900 text-lg pl-3 title-font font-bold mb-3 text-left dark:text-amber-600">
                  <li>B1 Light</li>
                  <li>B2 Medium</li>
                  <li>B3 Full</li>
                </ul>
                <p className="leading-relaxed text-base dark:text-dark-500">
                  Similarly to wine, coffee has a “mouth-feel” or body. A drink
                  with a full body will take over the palette and have a
                  lingering effect, while a light-bodied brew will feel clean
                  and have no lingering feeling. A light-bodied coffee isn’t as
                  great with cream— it’ll taste watered down. But a full-bodied
                  coffee can taste great with cream.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5 flex-shrink-0">
                <FaGrinTongueWink className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">
                  Acidity
                </h2>
                <ul className="text-blue-900 text-lg pl-3 title-font font-bold mb-3 text-left dark:text-blue-600">
                  <li>A1 Low</li>
                  <li>A2 Moderate</li>
                  <li>A3 High</li>
                </ul>
                <p className="leading-relaxed text-base dark:text-dark-500">
                  Acidity is the third thing you’ll notice when you taste your
                  coffee—it’s the tart, dry effect you feel on your tongue. A
                  coffee with high acidity has a little bite or snap at first,
                  then dissipates into a more dry sensation. You won’t feel this
                  with a low-acidity brew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoffee;
