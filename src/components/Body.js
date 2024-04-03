import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCards from "../Constant/useRestaurantCards";
import useOnlineStatus from "../Constant/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { list, filteredList } = useRestaurantCards();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Oops Looks like you are offline</h1>;
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search Restaurants...."
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value) {
              const filteresRest = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteresRest);
            } else {
              setFilteredList(list);
            }
          }}
        />
        <i
          className="fa-solid fa-xmark clear"
          onClick={() => {
            setSearchText("");
            setFilteredList(list);
          }}
        ></i>
        <button
          className="search-btn"
          onClick={() => {
            const filteresRest = list.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filteresRest);
          }}
        >
          Search
        </button>
      </div>
      <div className="filters">
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(list.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top Rated <i className="fa-regular fa-star"></i>
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(list);
          }}
        >
          All
        </button>
      </div>
      <div className="restaurants-container">
        {list.length === 0 ? (
          <Shimmer />
        ) : (
          filteredList.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard key={restaurant.info.id} data={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
