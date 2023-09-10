import React from "react";
import HeroBanner from "../containers/HeroBanner";
import MovieCardContainer from "../containers/MovieCardContainer";
import TVCardContainer from "../containers/TVCardContainer"

const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <MovieCardContainer/>
      <TVCardContainer/>
    </>
  );
};

export default LandingPage;
