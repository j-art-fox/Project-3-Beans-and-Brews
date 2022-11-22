import { FaGlassMartini, FaGrinTongue, FaGrinTongueWink } from "react-icons/fa";
import React from "react";

const OurCoffee = () => {
  return (
    <div>
      
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="max-h-96 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">How High-Altitude Roasting™ Works
            </h1>
            <p class="mb-8 leading-relaxed">  As you can imagine, coffee roasting is a complex art. Back when we
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
            <div class="flex justify-center">
              <a href="https://www.youtube.com/watch?v=XltzFNeLkXQ&feature=youtu.be" target="_blank" media="screen">
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
              </a>
            </div>
          </div>
          <div class="md:w-1/2 w-5/6">
            <img class="object-contain object-center rounded-xl" alt="hero" src="https://images.pexels.com/photos/3932951/pexels-photo-3932951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
        </div>
      </section>
       

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              FBA: Our Special Coding System for Coffee Flavor Profiles
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              You already know—we’re nuts about beans. So we developed our own
              special system to measure the flavor, body, and acidity (FBA) of
              our brews. It helps us explain our different roasts to our guests,
              whether you’re stopping in for a hot brew or picking up a bag of
              beans to take home.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5 flex-shrink-0">
                <FaGrinTongue class="w-10 h-10" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Flavor
                </h2>
                <ul class="text-stone-900 text-lg pl-3 title-font font-bold mb-3 text-left">
                  <li>F1 Mellow</li>
                  <li>F2 Medium</li>
                  <li>F3 Intense</li>
                </ul>
                <p class="leading-relaxed text-base">
                  Just as you’d think: “flavor” describes the taste and aroma of
                  the coffee. You might not even realize it consciously, but you
                  notice it immediately. Flavor is a matter of preference—maybe
                  you like sipping something mellow, or maybe you dig a deep,
                  intense flavor.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5 flex-shrink-0">
                <FaGlassMartini class="w-10 h-10" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Body
                </h2>
                <ul class="text-amber-900 text-lg pl-3 title-font font-bold mb-3 text-left">
                  <li>B1 Light</li>
                  <li>B2 Medium</li>
                  <li>B3 Full</li>
                </ul>
                <p class="leading-relaxed text-base">
                  Similarly to wine, coffee has a “mouth-feel” or body. A drink
                  with a full body will take over the palette and have a
                  lingering effect, while a light-bodied brew will feel clean
                  and have no lingering feeling. A light-bodied coffee isn’t as
                  great with cream— it’ll taste watered down. But a full-bodied
                  coffee can taste great with cream.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5 flex-shrink-0">
                <FaGrinTongueWink class="w-10 h-10" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Acidity
                </h2>
                <ul class="text-blue-900 text-lg pl-3 title-font font-bold mb-3 text-left">
                  <li>A1 Low</li>
                  <li>A2 Moderate</li>
                  <li>A3 High</li>
                </ul>
                <p class="leading-relaxed text-base">
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
