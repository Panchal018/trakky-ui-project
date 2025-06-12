// src/components/SwiggyClone/RestaurantList.jsx
import React from "react";
import RestaurantCard from "./RestaurantCard";

const restaurants = [
  {
    name: "Burger Kingdom",
    cuisine: "American, Fast Food",
    rating: "4.3",
    time: "25",
    distance: "2.1",
    offer: "50% OFF up to ₹100",
    img: "https://source.unsplash.com/400x300/?burger,food",
  },
  {
    name: "Sushi Bar",
    cuisine: "Japanese, Sushi",
    rating: "4.7",
    time: "30",
    distance: "3.2",
    offer: "Free delivery",
    img: "https://source.unsplash.com/400x300/?sushi,restaurant",
  },
  {
    name: "Spice Villa",
    cuisine: "Indian, Curry",
    rating: "4.2",
    time: "20",
    distance: "1.8",
    offer: "40% OFF + 10% cashback",
    img: "https://source.unsplash.com/400x300/?indian,thali",
  },
];

export default function RestaurantList() {
  return (
    <div className="restaurant-list">
      <h2>Restaurants Near You</h2>
      {restaurants.map((res, i) => (
        <RestaurantCard key={i} data={res} />
      ))}
    </div>
  );
}
