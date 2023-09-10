/* eslint-disable */

import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../Requests";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "./Arrows";
import MovieCard from "./MovieCard";
import "./FilmContainer.css";
import PropTypes from "prop-types";

function HorizontalScrollingMenu({ data }) {
  const newItemsLimit = 10000;
  const [items, setItems] = useState();
  const [page, setPage] = useState(2);
  const pagination = async (baseLink, page) => {
    try {
      const response = await axios.get(`${baseLink}${page}`);
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching new data:", error);
      return [];
    }
  };
  const pushNewItems = async () => {
    try {
      const additionalItems = await pagination(
        requests.requestNowPlayingCustomPage,
        page
      );
      const newItems = [...items, ...additionalItems];
      setItems(newItems);
    } catch (error) {
      console.error("Error adding new items:", error);
    }
  };
  useEffect(() => {
    setItems(data?.slice(3));
  }, [data]);

  return (
    <>
      <div className="scrollingContainer">
        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={
              <RightArrow limit={newItemsLimit} pushNewItems={
                () => {
                    const newPage = page+1
                    setPage(newPage)
                    pushNewItems()
                }
              }/>
            }            
          >
            {items?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

export default HorizontalScrollingMenu;
