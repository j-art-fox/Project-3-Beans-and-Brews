import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, _id, price, quantity, description } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    
    <>
        <div className="bg-gray-100 p-6 rounded-lg">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} className=" border-4 border-gray-300 h-40 rounded mx-auto object-center mb-6 opacity-70 hover:opacity-100 hover:text-amber-500" />
       
      </Link>
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-80 hover:opacity-100">
        <h2  className="tracking-widest text-lg title-font font-medium text-amber-700 mb-1">{name}</h2>
        <h1>${price}</h1>
        <p>{description}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
      </div>
    </>
  );
}

export default ProductItem;