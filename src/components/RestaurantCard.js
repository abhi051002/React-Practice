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
    locality
  } = data?.info;

  console.log(costForTwo);
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
      <h3 className="res-name">{name}</h3>
      <h4 className="rating">
        <i className="fa-regular fa-star"></i>{avgRating} . {sla.slaString}
      </h4>
      <h4 className="cusines">{costForTwo }</h4>
      <h4 className="cusines">{cuisines.join(", ")}</h4>
      <h4 className="res-address">{locality},{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
