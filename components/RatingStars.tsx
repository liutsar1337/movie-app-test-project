import React from "react";
import { Rating } from "react-simple-star-rating";
import "./FilmContainers/FilmContainer.css";

interface RatingStarsProps {
  data: number;
  size?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  data,
}: RatingStarsProps) => {
  return (
    <>
      <Rating
        className="ratingStars"
        initialValue={data / 2}
        size={16}
        fillColor="ffffff"
        emptyColor="darkgray"
        allowFraction
        readonly
      />
    </>
  );
};

export default RatingStars;
