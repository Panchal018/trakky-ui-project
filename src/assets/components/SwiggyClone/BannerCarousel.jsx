// src/components/SwiggyClone/BannerCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SwiggyClone.css";

const banners = [
  "https://source.unsplash.com/800x300/?food,burger",
  "https://source.unsplash.com/800x300/?food,pizza",
  "https://source.unsplash.com/800x300/?christmas,meal"
];

export default function BannerCarousel() {
  return (
    <div className="banner-carousel">
      <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`banner-${index}`} className="banner-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
