import React from "react";
import { CDN_URL } from "../Constant/constant";

const ItemList = ({ items }) => {
  return (
    <div className="shadow-md border-gray-100 p-3">
      {items.map((item) => (
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
            <img src={CDN_URL + item.card.info.imageId}  alt={item.card.info.name}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
