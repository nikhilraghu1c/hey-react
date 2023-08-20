import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants // optional chaining
    );
    setFilteredRestaurant(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="filter-btn"
            onClick={() => {
              const updatedList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(updatedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top-Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(listOfRestaurants);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard
                resData={restaurant.info}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
