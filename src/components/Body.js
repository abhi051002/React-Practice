import RestaurantCard from "./RestaurantCard";
import data from "../Constant/data";
import { useState } from "react";

const Body = () => {
  const [list,setList] = useState(data);
  return (
    <div className="body">
      <div className="search">Search Restaurants</div>
      <div className="filters">
        <button
          className="filter-btn"
          onClick={() => {
            setList(list.filter((res) => res.stars > 4));
          }}
        >
          Top Rated <i className="fa-regular fa-star"></i>
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setList(list.filter((res) => res.deliveryTime == 30));
          }}
        >
          Less Time
        </button>
      </div>
      <div className="restaurants-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
