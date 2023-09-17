import PropTypes from "prop-types";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// SwiperBannerOverlay
import SwiperBannerOverlay from "./SwiperBannerOverlay";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SwiperBanner.css";

// required modules
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
          disableOnInteraction: true,
        }}
      >
        {props?.data?.slice(0, pageNumbers).map((movie, index) => (
          <SwiperSlide className="slide" key={index}>
            <Image
              fill
              priority
              alt={"moviePoster"}
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              // style={{ maxWidth: "100%", height: "auto" }}
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
