import React, { useState } from "react";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, img, stars, priceforTwo, deliveryTime, cusines, address } =
    data;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={`res-card ${showInfo ? "expanded" : ""}`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img src={img} alt={name} className="res-logo" />
      <h3 className="res-name">{name}</h3>
      <h4 className="rating">
        <i className="fa-regular fa-star"></i> {stars} . {deliveryTime} mins
      </h4>
      <h4 className="cusines">₹ {priceforTwo / 100} for Two</h4>
      <h4 className="cusines">{cusines.join(" , ")}</h4>
      <h4 className="res-address">{address}</h4>
      {showInfo && <RestaurantInfo />}
    </div>
  );
};

export default RestaurantCard;
