import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../utils/auth";

import CartItem from "../CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <>
        <div
          onClick={toggleCart}
          title="open cart"
          className="transition-all ease-in-out duration-200 hover:scale-105 hover:cursor-pointer hover:border-stone-300 hover:bg-amber-100 flex justify-center text-2xl align-middle shadow-lg max-w-sm md:w-16 md:h-16 max-h-sm border-4 rounded-l-md z-20 fixed right-0 bg-white"
        >
          <FaShoppingCart className="text-stone-700 hover:text-stone-800 w-full h-full p-3" />
        </div>
      </>
    );
  }

  return (
    <div className="rounded-l-md transition-all ease-in-out duration-200 text-stone-700 fixed right-0 bg-stone-100 z-20 shadow-lg">
      <div className="rounded-tl-md  flex flex-wrap justify-between bg-white shadow-md">
        <h2 className="text-2xl m-4 pb-1">Shopping Cart</h2>
        <div role="img" className="text-2xl hover:cursor-pointer pb-1 my-auto mr-4" onClick={toggleCart}>
          <FaWindowClose className="hover:scale-105 hover:text-red-800" />
        </div>
      </div>

      {state.cart.length ? (
        <div className="">
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="ml-4 mb-2">
            <strong>Total: ${calculateTotal()} </strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center m-4">
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default Cart;
