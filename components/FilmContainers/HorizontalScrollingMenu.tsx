"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "@utils/Requests";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "./Arrows";
import { Movie } from "@utils/types";
import MovieCard from "./MovieCard";
import "./FilmContainer.css";

interface HorizontalScrollingMenuProps {
  data: Movie[] | undefined;
  isMovie: boolean;
}

const HorizontalScrollingMenu: React.FC<HorizontalScrollingMenuProps> = ({
  data,
  isMovie,
}: HorizontalScrollingMenuProps) => {
  const newItemsLimit = 10000;
  const [items, setItems] = useState<object[] | undefined>(undefined);
  const [page, setPage] = useState(2);

  const pagination = async (baseLink: string, page: number) => {
    try {
      const response = await axios.get(`/api/withPage/${baseLink}/${page}`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching new data:", error);
      return [];
    }
  };

  const pushNewItems = async () => {
    try {
      const additionalItems = await pagination(
        isMovie ? "requestNowPlayingCustomPage" : "requestFeaturedTVCustomPage",
        page
      );
      const newItems = [...(items || []), ...additionalItems];
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
        <div className={`${isMovie ? "movie" : "tv"}`}>
          {items && (
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
              {items.map((movie: any) => (
                <MovieCard movie={movie} key={movie.id} isMovie={isMovie} />
              ))}
            </ScrollMenu>
          )}
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollingMenu;
