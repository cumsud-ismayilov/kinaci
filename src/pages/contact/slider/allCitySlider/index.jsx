import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const cities = [
  { name: "Antalya", img: "/src/assets/div.item.png" },
  { name: "İstanbul", img: "/src/assets/div.item (1).png" },
  { name: "Izmir", img: "/src/assets/div.item (2).png" },
  { name: "Ankara", img: "/src/assets/ankara.png.png" },
  { name: "Edirne", img: "/src/assets/edirne.png.png" },
  { name: "Tekirdağ", img: "/src/assets/tekirdağ.png.png" },
  { name: "Eskişehir", img: "/src/assets/eskişehir.png.png" },
];

function AllCitySlider() {
  const navigate = useNavigate();

  const handleClick = (cityName) => {
    navigate(`/possessions?city=${cityName}`);
  };
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={15}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper myCustomSwiper"
    >
      {cities.map((city, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={city.img}
            alt={city.name}
            className="cursor-pointer"
            onClick={() => handleClick(city.name)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default AllCitySlider;
