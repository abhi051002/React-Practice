import React, { useState } from "react";
import { CDN_URL } from "../Constant/constant";

const RestaurantCard = (props) => {
  const { data } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    areaName,
    locality,
  } = data?.info;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={`res-card ${showInfo ? "expanded" : ""}`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-name">{name}</div>
      <div className="rating">
        <i className="fa-regular fa-star"></i>
        {avgRating} . {sla.slaString}
      </div>
      <div className="cusines">{costForTwo}</div>
      <div className="cusines">{cuisines.join(", ")}</div>
      <div className="res-address">
        {locality},{areaName}
      </div>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 ml-7 rounded-md bg-green-500 text-white">Opened</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
