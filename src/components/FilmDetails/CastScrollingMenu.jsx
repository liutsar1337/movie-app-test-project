/* eslint-disable */

import React, { useState } from "react";


import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "../FilmContainers/Arrows";
import CastCard from "./CastCard";
// import MovieCard from "./MovieCard";
import "../FilmContainers/FilmContainer.css"

function CastScrollingMenu({ data }) {
  return (
    <>
      <div className="scrollingContainer">
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={<RightArrow limit={20}
            pushNewItems={() => ''}/>}
          >
            {data?.map((actor, index) => (
            <CastCard key={index} actor={actor}></CastCard>
            ))}
          </ScrollMenu>
      </div>
    </>
  );
}

export default CastScrollingMenu;
