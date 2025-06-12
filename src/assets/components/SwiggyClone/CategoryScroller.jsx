// src/components/SwiggyClone/CategoryScroller.jsx
import React from "react";
import "./SwiggyClone.css";

const categories = [
  { title: "Biryani", img: "https://source.unsplash.com/100x100/?biryani" },
  { title: "Pizza", img: "https://source.unsplash.com/100x100/?pizza" },
  { title: "Burger", img: "https://source.unsplash.com/100x100/?burger" },
  { title: "Cake", img: "https://source.unsplash.com/100x100/?cake" },
  { title: "Ice Cream", img: "https://source.unsplash.com/100x100/?icecream" },
  { title: "Drinks", img: "https://source.unsplash.com/100x100/?drinks" },
];

export default function CategoryScroller() {
  return (
    <div className="category-scroller">
      {categories.map((cat, index) => (
        <div key={index} className="category-card">
          <img src={cat.img} alt={cat.title} />
          <span>{cat.title}</span>
        </div>
      ))}
    </div>
  );
}
