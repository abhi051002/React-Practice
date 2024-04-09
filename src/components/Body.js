import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCards from "../Constant/useRestaurantCards";
import useOnlineStatus from "../Constant/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  console.log(list);
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);
  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  // promoted
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
              {restaurant.info.isOpen ? (
                <RestaurantCardWithPromoted data={restaurant} />
              ) : (
                <RestaurantCard key={restaurant.info.id} data={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
