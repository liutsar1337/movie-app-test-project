import React, { useState, useEffect } from "react";
import FilmCategoryLink from "../components/FilmContainers/FilmCategoryLink";
import requests from "../Requests";
import axios from "axios";
import HorizontalScrollingMenu from "../components/FilmContainers/HorizontalScrollingMenu";

const MovieCardContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestNowPlaying).then((response) => {
      setMovies(response.data);
    });
    console.log(movies)
  }, []);
  
  return (
    <>
      <FilmCategoryLink link="https://www.themoviedb.org/movie/now-playing">New Releases</FilmCategoryLink>
      <HorizontalScrollingMenu data={movies.results} isMovie/>
    </>
  );
};

export default MovieCardContainer;
