"use client";

import { useState, useEffect } from "react";
import requests from "@utils/Requests";
import axios from "axios";
import HeroBanner from "@containers/HeroBanner";
import MovieCardContainer from "@containers/MovieCardContainer";
import TVCardContainer from "@containers/TVCardContainer";

const Home = () => {
  const [tvShows, setTvShows] = useState([])
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const tvResponse = await axios.get(requests.requestFeaturedTV);
        const movieResponse = await axios.get(requests.requestNowPlaying);

        setTvShows(tvResponse.data);
        setMovies(movieResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <>
      <HeroBanner movies={movies} />
      <MovieCardContainer movies={movies} />
      <TVCardContainer tvShows={tvShows}/>
    </>
  );
};

export default Home;
