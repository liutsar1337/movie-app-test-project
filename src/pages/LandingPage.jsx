import React from "react";
import HeroBanner from "../containers/HeroBanner";
import MovieCardContainer from "../containers/MovieCardContainer";
import TVCardContainer from "../containers/TVCardContainer"
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <MovieCardContainer/>
      <TVCardContainer/>
      <Footer/>
    </>
  );
};

export default LandingPage;
