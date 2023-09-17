import Link from "next/link";
import PropTypes from "prop-types";

const MoviePageLink = (props) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <Link
      style={linkStyle}
      href={`${props.isMovie ? "movie" : "tv"}/${
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
