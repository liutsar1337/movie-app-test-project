import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FilmContainer.css";

const FilmCategoryLink = (props) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <Link
        style={linkStyle}
        to={props.link}
        className={`film-category-link ${props.className}`}
      >
        <span>{props.children}</span>
        <span className="arrowIcon"></span>
      </Link>
    </div>
  );
};

FilmCategoryLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FilmCategoryLink;
