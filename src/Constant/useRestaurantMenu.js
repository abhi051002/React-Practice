import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);

    const json = await data.json();
    setRestInfo(json?.data);
  };
  return restInfo;
};

export default useRestaurantMenu;