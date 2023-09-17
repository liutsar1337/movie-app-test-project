import Link from "next/link";
import PropTypes from "prop-types";

const GenreTag = ({ genreName, genreCode, isMovie }) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <Link
      className="genreTag"
      style={linkStyle}
      href={`https://www.themoviedb.org/genre/${genreCode}-${genreName}/${
        isMovie ? "movie" : "tv"
      }`}
      target="_blank"
    >
      {genreName ? genreName : 'Action'}
    </Link>
  );
};

GenreTag.propTypes = {
  genreName: PropTypes.string,
  genreCode: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default GenreTag;
