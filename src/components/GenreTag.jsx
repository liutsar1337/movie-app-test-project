import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GenreTag = ({ genreName, genreCode, isMovie }) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <Link
      className="genreTag"
      style={linkStyle}
      to={`https://www.themoviedb.org/genre/${genreCode}-${genreName}/${
        isMovie ? "movie" : "tv"
      }`}
      target="_blank"
    >
      {genreName}
    </Link>
  );
};

GenreTag.propTypes = {
  genreName: PropTypes.string,
  genreCode: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default GenreTag;
