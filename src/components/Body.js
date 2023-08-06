import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable  - Super Powerful Variable - React Hooks
  const [listOfRestaurants, setListOfRestaurant] = useState([
    {
      info: {
        id: "150602",
        name: "Raimens Cafe 79",
        cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
        costForTwo: "₹250 for two",
        cuisines: [
          "Fast Food",
          "Pizzas",
          "Chinese",
          "Snacks",
          "Beverages",
          "Desserts",
        ],
        avgRating: 3.8,
        sla: {
          deliveryTime: 21,
        },
      },
    },
    {
      info: {
        id: "150604",
        name: "Dominos",
        cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
        costForTwo: "₹250 for two",
        cuisines: [
          "Fast Food",
          "Pizzas",
          "Chinese",
          "Snacks",
          "Beverages",
          "Desserts",
        ],
        avgRating: 4.5,
        sla: {
          deliveryTime: 21,
        },
      },
    },
  ]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
