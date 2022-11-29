import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          className="w-full"
          src={`/images/${item.image}`}
          alt="coffee"
        />
      </div>
      <div className="">
        <div className="text-center text-lg border-b-2"><span className="font-marker text-amber-700">{item.name}</span>, ${item.price}</div>
        <div className="flex justify-between ml-4">
          <span>Quantity: <input
            className="w-1/5"
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          /></span>
          
          <span className="hover:cursor-pointer text-red-900 font-bold hover:text-red-600 "
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
          delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;