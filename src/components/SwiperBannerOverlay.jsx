import React from "react";
import PropTypes from "prop-types";
import genres from "../assets/genres";
import RatingStars from "./RatingStars";
import GenreTag from "./GenreTag";
import MoviePageLink from "./MoviePageLink";

const SwiperBannerOverlay = ({ data, number, limit }) => {
  const genreCode = data.genre_ids[0];
  const genreName = genres[genreCode];
  return (
    <>
      <div className="overlay">
        <span
          className={`leftShadow 
        ${number === 0 && "leftNone"}`}
        ></span>
        <div className="halfScreen">
          <GenreTag genreCode={genreCode} genreName={genreName} isMovie />
          <RatingStars data={data.vote_average} />
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <MoviePageLink id={data.id} isMovie>
            <button>
              <span>Watch now</span>
            </button>
          </MoviePageLink>
        </div>
        <div></div>
        <span
          className={`rightShadow
        ${number === limit - 1 && "rightNone"}`}
        ></span>
      </div>
    </>
  );
};

SwiperBannerOverlay.propTypes = {
  data: PropTypes.shape({
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    vote_average: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  number: PropTypes.shape(PropTypes.number).isRequired,
  limit: PropTypes.shape(PropTypes.number).isRequired,
};

export default SwiperBannerOverlay;
