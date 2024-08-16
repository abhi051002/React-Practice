import React from "react";
import { CDN_URL } from "../Constant/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Constant/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const getItemCount = (itemName) => {
    return cartItems.filter((item) => item === itemName).length;
  };

  const handleCart = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(removeItem(item));
  };

  console.log(cartItems.length);

  return (
    <div className="shadow-md border-gray-100 p-3">
      {items.map((item) => {
        const itemName = item;
        const itemCount = getItemCount(itemName);

        return (
          <div
            key={item.card.info.id}
            className="p-4 border-b-2 border-gray-300 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-semibold text-md">
                  {item.card.info.name}
                </span>
                <span className="block text-sm">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {item.card.info.description}
              </p>
            </div>
            <div className="flex justify-center items-center w-3/12">
              {/* <img src={CDN_URL + item.card.info.imageId}  alt={item.card.info.name}/>  */}
            </div>
            <button
              className="flex justify-center items-center w-32 h-10 bg-black text-white p-0 rounded-lg"
              onClick={itemCount === 0 ? () => handleCart(item) : null}
              id="addCart"
            >
              {itemCount === 0 ? (
                "Add"
              ) : (
                <div className="flex items-center justify-between w-full">
                  <span
                    onClick={() => handleDecrement(item)}
                    className="px-2 cursor-pointer text-white"
                  >
                    -
                  </span>
                  <span>{itemCount}</span>
                  <span
                    onClick={() => handleCart(item)}
                    className="px-2 cursor-pointer text-white"
                  >
                    +
                  </span>
                </div>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
