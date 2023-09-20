import SwiperBanner from "@components/HeroBanner/SwiperBanner";
import { LandingPageProps } from "@utils/types";

const HeroBanner = ({ movies }:LandingPageProps) => {
  return (
    <>
      <SwiperBanner data={movies?.results} />
    </>
  );
};

export default HeroBanner;
