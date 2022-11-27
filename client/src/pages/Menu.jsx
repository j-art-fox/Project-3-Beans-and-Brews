import React, { useEffect } from "react";
import MenuItem from "../components/MenuItem/index";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../images/spinnerB.gif";

function Menu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);


  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

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
          {state.products.length ? (
            <div className="xl:w-1/4 md:w-1/2 p-4">
              {filterProducts().map((product) => (
                <MenuItem
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
          ) : (
            <h3>Don't forget to seed the db</h3>
          )}
          {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
      </div>
    </section>
  );
}

export default Menu;
