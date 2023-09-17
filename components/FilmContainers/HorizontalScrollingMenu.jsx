'use client'

import  { useState, useEffect } from "react";
import axios from "axios";
import requests from "@utils/Requests";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "./Arrows";
import MovieCard from "./MovieCard";
import "./FilmContainer.css";

function HorizontalScrollingMenu({ data, isMovie }) {
  const newItemsLimit = 10000;
  const [items, setItems] = useState();
  const [page, setPage] = useState(2);
  const pagination = async (baseLink, page) => {
    try {
      const response = await axios.get(`${baseLink}${page}`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching new data:", error);
      return [];
    }
  };
  const pushNewItems = async () => {
    try {
      const additionalItems = await pagination(
        isMovie
          ? requests.requestNowPlayingCustomPage
          : requests.requestFeaturedTVCustomPage,
        page
      );
      const newItems = [...items, ...additionalItems];
      setItems(newItems);
    } catch (error) {
      console.error("Error adding new items:", error);
    }
  };
  useEffect(() => {
    setItems(isMovie ? data?.slice(3) : data);
  }, [data]);

  return (
    <>
      <div className="scrollingContainer">
        <div className={`${isMovie ? 'movie' : 'tv'}`}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={
              <RightArrow
                limit={newItemsLimit}
                pushNewItems={() => {
                  const newPage = page + 1;
                  setPage(newPage);
                  pushNewItems();
                }}
              />
            }
          >
            {items?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} isMovie={isMovie} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

export default HorizontalScrollingMenu;
