/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import RatingStars from "../RatingStars";
import GenreTag from "../GenreTag";
import genres from "../../assets/genres";
import FilmCategoryLink from "./FilmCategoryLink";

function MovieCard({ movie, isMovie }) {
  const genreCode = movie.genre_ids[0];
  const genreName = genres[genreCode];
  return (
    <div role="button" tabIndex={0} className="card">
      <div />
      <img
        className="posterImage"
        src={`https://image.tmdb.org/t/p/${isMovie ? 'w500' : 'w780'}${movie.poster_path}`}
      />
      <div className="cardOverlay">
        <GenreTag genreCode={genreCode} genreName={genreName} isMovie />
        <RatingStars size={12} data={movie.vote_average} />
        <p>{isMovie ? movie.original_title : movie.name}</p>
        <span className="activeOnHover">
          <FilmCategoryLink
            class="activeOnHover"
            link={`${isMovie ? 'movie' : 'tv'}/${movie.id}`}
          >

            Watch now
          </FilmCategoryLink>
        </span>
      </div>
      <div className="bottomShadow"></div>
    </div>
  );
}

export default MovieCard;
