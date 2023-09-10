import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MoviePageLink = (props) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <Link
      target="_blank"
      style={linkStyle}
      to={`https://www.themoviedb.org/${props.isMovie ? "movie" : "tv"}/${
        props.id
      }`}
    >
      {props.children}
    </Link>
  );
};

MoviePageLink.propTypes = {
  id: PropTypes.number.isRequired,
  isMovie: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default MoviePageLink;
