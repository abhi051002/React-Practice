import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchApi();
  },[]);

  const fetchApi = async () =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();

    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
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
        {list.length === 0 ? <Shimmer /> : filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
