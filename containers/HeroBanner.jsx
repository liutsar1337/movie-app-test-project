import SwiperBanner from "@components/HeroBanner/SwiperBanner";

const HeroBanner = ({movies}) => {
  return (
    <>
      <SwiperBanner data={movies.results} />
    </>
  );
};

export default HeroBanner;
