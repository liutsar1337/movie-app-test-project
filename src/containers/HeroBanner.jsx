import React, { useEffect, useState } from "react";
import SwiperBanner from "../components/HeroBanner/SwiperBanner";
import requests from "../Requests";
import axios from "axios";

const HeroBanner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestNowPlaying).then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      <SwiperBanner data={movies.results} />
    </>
  );
};

export default HeroBanner;
