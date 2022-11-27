import React, { useEffect, useState } from 'react';

const products = [
  {
    name: 'Cold Brew',
    description: `We've spent a long time perfecting our cold brew process. Now we're proud to offer a cold brew with our signature High-Altitude Roasted beans brewed over twelve hours, resulting in a smooth, full-bodied taste with hints of cocoa and caramel.`,
    image:
      'https://www.beansandbrews.com/wp-content/uploads/2020/05/Cold-Brew_400-Copy-300x200.jpg.webp',
    price: 2.99,
    quantity: 500
  },
  {
    name: 'Hot Eggnog Latte',
    description: `Rich, creamy eggnog and skim milk with fresh brewed espresso lightly dusted with cinnamon and nutmeg, delicious decadence!`,
    image:
      'https://www.beansandbrews.com/wp-content/uploads/2018/11/Eggnog-300x300.jpg.webp',
    price: 2.99,
    quantity: 500
  },
  {
    name: 'Cold Eggnog Latte',
    description: `Rich, creamy eggnog and skim milk with fresh brewed espresso lightly dusted with cinnamon and nutmeg, delicious decadence!`,
    image:
      'https://www.beansandbrews.com/wp-content/uploads/2018/11/Eggnog-300x300.jpg.webp',
    price: 2.99,
    quantity: 500
  },
  {
    name: 'Cane & Cream Cold Brew',
    description: `Our signature full-bodied cold brew with a splash of cream and lightly sweetened with cane sugar.`,
    image:
      'https://www.beansandbrews.com/wp-content/uploads/2020/05/Cane-Cream_400-300x200.jpg.webp',
    price: 2.99,
    quantity: 500
  },
  {
    name: 'Cappuccino',
    description:
      'Our Beans cappuccino combines creamy steamed milk, piping-hot espresso, and a generous helping of foamy froth. Pair with a fresh biscotti and sink into a cozy armchair.',
    image:
      'https://www.beansandbrews.com/wp-content/uploads/2011/10/BB_Hot-Cappucinno-300x200.jpg.webp',
    price: 2.99,
    quantity: 500
  },
  {
    name: 'Caramel Cielo',
    description: `Feeling a little decadent? This signature espresso drink's special recipe includes a frothy topping and a drizzle of real caramel sauce. It's the perfect balance of a pick-me-up and a treat.`,
    image:
      'https://www.beansandbrews.com/wp-content/uploads/2011/10/BB_Hot-Caramel-Cielo-300x200.jpg.webp',
    price: 1.99,
    quantity: 500
  },
  {
    name: 'Café Latte',
    description: `It's a classic for good reason: espresso, steamed milk, and topped with the perfect dollop of froth. It's perfect for those new to espresso drinks--and perfect for seasoned folks who love a traditional go-to.`,
    image: 'https://www.beansandbrews.com/wp-content/uploads/2011/10/cafe-latte.jpg',
    price: 4.99,
    quantity: 20
  },
  {
    name: 'Pumpkin Pie Fritalia™',
    description: `It's a classic for good reason: espresso, steamed milk, and topped with the perfect dollop of froth. It's perfect for those new to espresso drinks--and perfect for seasoned folks who love a traditional go-to.`,
    image: 'https://www.beansandbrews.com/wp-content/uploads/2019/09/Pumpkin-PF.jpg',
    price: 7.99,
    quantity: 20
  }
];

const Menu = () => {
  // const [products, setProducts] = useState([]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="grid lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-2 text-gray-900">
              We give a Bean.
            </h1>
            <div className="h-1 justify-self-center w-96 bg-amber-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            From the beginning, we’ve made it our top priority to use the finest
            ingredients out there. We lovingly roast every single bean, right at
            our headquarters in Salt Lake. Here, every recipe is tested, time
            and time again, till it truly hits the spot. We know that if we put
            extra thoughtful care in everything we make, you’ll taste the
            difference.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {products
            ? products.map((product) => {
                return (
                  <div className="xl:w-1/4 md:w-1/2 p-4" key={product.name}>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <a href="#">
                      <img
                        alt={product.name}
                        className="h-40 rounded mx-auto object-center mb-6 opacity-100 hover:opacity-80 hover:text-amber-500"
                        src={product.image}
                      />
                      </a>
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium text-amber-700 mb-1">
                          {product.name}
                        </h2>
                        <h1 className="title-font text-md font-medium text-gray-900 mb-3">
                          {product.price}
                        </h1>
                        <p className="leading-relaxed">{product.description}</p>
                        <a
                          className="mt-5 inline-flex items-center hover:font-bold"
                          href="#"
                        >
                          Order Online
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default Menu;
