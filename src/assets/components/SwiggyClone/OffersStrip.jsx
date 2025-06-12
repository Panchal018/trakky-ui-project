// src/components/SwiggyClone/OffersStrip.jsx
import React from "react";
import "./SwiggyClone.css";

const offers = [
  {
    img: "https://source.unsplash.com/400x150/?offer,coupon",
    alt: "Flat 200 OFF",
  },
  {
    img: "https://source.unsplash.com/400x150/?deal,food",
    alt: "Flash Sale",
  },
];

export default function OffersStrip() {
  return (
    <div className="offers-strip">
      {offers.map((offer, i) => (
        <img key={i} src={offer.img} alt={offer.alt} />
      ))}
    </div>
  );
}
