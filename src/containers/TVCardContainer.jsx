import React, { useState, useEffect } from "react";
import FilmCategoryLink from "../components/FilmContainers/FilmCategoryLink";
import requests from "../Requests";
import axios from "axios";
import HorizontalScrollingMenu from "../components/FilmContainers/HorizontalScrollingMenu";
import "../components/FilmContainers/FilmContainer.css"
import "../App.css"

const TVCardContainer = () => {
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    axios.get(requests.requestFeaturedTV).then((response) => {
      setTvShows(response.data);
    });
  }, []);
  
  return (
    <>
      <FilmCategoryLink className={"TVCategoryLink"} link="https://www.themoviedb.org/tv">Featured TV shows</FilmCategoryLink>
      <HorizontalScrollingMenu data={tvShows.results}/>
    </>
  );
};

export default TVCardContainer;
