/* eslint-disable */
import RatingStars from "@components/RatingStars";
import GenreTag from "@components/GenreTag";
import genres from "@utils/genres";
import FilmCategoryLink from "./FilmCategoryLink";
import Image from "next/legacy/image";

function MovieCard({ movie, isMovie }) {
  const genreCode = movie.genre_ids[0];
  const genreName = genres[genreCode];
  return (
    <div role="button" tabIndex={0} className="card">
      <div />
      <Image
        width={isMovie ? 292 : 504}
        height={isMovie ? 440 : 736}
        layout="responsive"
        alt="movieCardName"
        className="posterImage"
        src={`https://image.tmdb.org/t/p/${isMovie ? "w500" : "w780"}${
          movie.poster_path
        }`}
      />
      <div className="cardOverlay">
        <GenreTag genreCode={genreCode} genreName={genreName} isMovie />
        <RatingStars size={12} data={movie.vote_average} />
        <p>{isMovie ? movie.original_title : movie.name}</p>
        <span className="activeOnHover">
          <FilmCategoryLink
            class="activeOnHover"
            link={`${isMovie ? "movie" : "tv"}/${movie.id}`}
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
``;
