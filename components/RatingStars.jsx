import { Rating } from "react-simple-star-rating";
import PropTypes from "prop-types"; // Import PropTypes
import "./FilmContainers/FilmContainer.css";

export function RatingStars(props) {
  return (
    <>
      <Rating
        className="ratingStars"
        size={'16px'}
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
