import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import SwiperBanner from "../components/SwiperBanner";

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
