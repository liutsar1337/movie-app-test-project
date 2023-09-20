import React from 'react';
import Image from 'next/image';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// SwiperBannerOverlay
import SwiperBannerOverlay from './SwiperBannerOverlay';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperBanner.css';
// required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Movie } from '@utils/types';

interface SwiperBannerProps {
  data: Movie[] | undefined;
}

const pageNumbers = 3;

const SwiperBanner: React.FC<SwiperBannerProps> = ({ data }: SwiperBannerProps) => {
  return (
    <>
      {data && <Swiper
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
        {data?.slice(0, pageNumbers).map((movie, index) => (
          <SwiperSlide className="slide" key={index}>
            <Image
              fill
              priority
              alt="moviePoster"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            />
            <SwiperBannerOverlay className="overlay" data={movie} number={index} />
          </SwiperSlide>
        ))}
      </Swiper>
}
    </>
  );
};

export default SwiperBanner;