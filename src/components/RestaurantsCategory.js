import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantsCategory = ({ data, showList, setShowIndex }) => {
  const handleClick = () => {
    document.getElementById("arow").innerText = "⬆️";
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-6 bg-gray-50 p-3 shadow-lg  rounded-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span id="arow">⬇️</span>
        </div>
        {showList && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantsCategory;
