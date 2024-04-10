import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Constant/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { restId } = useParams();
  const [showIndex,setShowIndex] = useState();

  const restInfo = useRestaurantMenu(restId);

  if (restInfo === null) {
    return <Shimmer />;
  } else {
    console.log(restInfo);
    const { name, cuisines, costForTwoMessage } =
      restInfo?.cards[2]?.card?.card.info;
    const { itemCards } =
      restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;

    const categories =
      restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    // console.log(categories);
    return (
      <div className="text-center">
        <h1 className="font-extrabold text-3xl m-8">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(" , ")} - {costForTwoMessage}
        </p>
        {categories.map((category, index) => (
          <RestaurantsCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showList = {index === showIndex ? true : false}
            setShowIndex= {()=>setShowIndex(index)}
          />
        ))}
      </div>
    );
  }
};

export default RestaurantsMenu;
