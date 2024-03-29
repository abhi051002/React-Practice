import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Constant/constant";

const RestaurantsMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { restId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);

    const json = await data.json();
    setRestInfo(json?.data);
    console.log(json);
  };

  if (restInfo === null) {
    return <Shimmer />;
  } else {
    console.log(restInfo);
    const { name, cuisines, costForTwoMessage } =
      restInfo?.cards[2]?.card?.card.info;
    const { itemCards } =
      restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    return (
      <div className="rest_menu">
        <h1 className="rest_name">{name}</h1>
        <p className="cuuisines">
          {cuisines.join(" , ")} - {costForTwoMessage}
        </p>
        <h2 className="menu">Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Price: Rs.{item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default RestaurantsMenu;
