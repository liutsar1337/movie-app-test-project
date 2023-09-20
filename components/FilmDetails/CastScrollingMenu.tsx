import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "../FilmContainers/Arrows";
import CastCard from "./CastCard";
import { Actor } from "@utils/types";
import "../FilmContainers/FilmContainer.css";

interface CastScrollingMenuProps {
  data: Actor[];
}

function CastScrollingMenu({ data }: CastScrollingMenuProps) {
  return (
    <>
      <div className="scrollingContainer">
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={<RightArrow limit={20} pushNewItems={() => ""} />}
        >
          {data?.map((actor: Actor, index: number) => (
            <CastCard key={index} actor={actor} />
          ))}
        </ScrollMenu>
      </div>
    </>
  );
}

export default CastScrollingMenu;
