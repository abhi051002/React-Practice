// import { useEffect, useState } from "react";

// const useRestaurantCards = () => {
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     fetchApi();
//   }, []);

//   const fetchApi = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     setList(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };
//   console.log(list);
//   return list;
// };

// export default useRestaurantCards;
