import React from "react";
import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import SwiperBannerOverlay
import SwiperBannerOverlay from "./SwiperBannerOverlay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SwiperBanner.css";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

var pageNumbers = 3;

export default function SwiperBanner(props) {
  return (
    <>
      <Swiper
        className="mySwiper"
        loop
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true
        }}
      >
        {props?.data?.slice(0, pageNumbers).map((movie, index) => (
          <SwiperSlide className="slide" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
            <SwiperBannerOverlay
              data={movie}
              number={index}
              className="overlay"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

SwiperBanner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
    })
  ),
};
