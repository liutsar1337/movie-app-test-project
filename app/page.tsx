"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import HeroBanner from "@containers/HeroBanner";
import MovieCardContainer from "@containers/MovieCardContainer";
import TVCardContainer from "@containers/TVCardContainer";
import { MovieListResponse } from "@utils/types";

const Home: React.FC = () => {
  const [tvShows, setTvShows] = useState<MovieListResponse>();
  const [movies, setMovies] = useState<MovieListResponse>();

  useEffect(() => {
    async function fetchData() {
      try {
        const tvResponse = await axios.get("/api/exact/requestFeaturedTV");
        const movieResponse = await axios.get("/api/exact/requestNowPlaying");

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
      <TVCardContainer tvShows={tvShows} />
    </>
  );
};

export default Home;
