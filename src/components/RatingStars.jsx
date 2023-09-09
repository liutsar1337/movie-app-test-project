import React from "react";
import { Rating } from "react-simple-star-rating";
import PropTypes from "prop-types"; // Import PropTypes

export function RatingStars(props) {
  return (
    <>
      <Rating
        size="16px"
        initialValue={props.data / 2}
        fillColor="ffffff"
        emptyColor="darkgray"
        allowFraction
        readonly
      />
    </>
  );
}

RatingStars.propTypes = {
  data: PropTypes.number, // Define prop type for 'rating'
};

export default RatingStars;
