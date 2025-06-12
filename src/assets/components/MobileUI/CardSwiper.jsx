// src/components/MobileUI/CardSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CardSwiper() {
 const data = [
  {
    id: 1,
    title: "Thai Spa",
    image: "https://images.unsplash.com/photo-1603398938378-3b7c3fe5a3de?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Hair Studio",
    image: "https://images.unsplash.com/photo-1603415526960-f8fce4a7e4ba?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Nail Art",
    image: "https://images.unsplash.com/photo-1592334873219-a34c42a4b0b4?auto=format&fit=crop&w=400&q=80"
  }
];


  return (
    <Swiper spaceBetween={10} slidesPerView={2} breakpoints={{
      350: { slidesPerView: 2 },
      500: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
    }}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
