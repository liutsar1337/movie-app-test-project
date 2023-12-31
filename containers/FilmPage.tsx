"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "@components/FilmDetails/FilmDetails.css";
import genres from "@utils/genres";
import GenreTag from "@components/GenreTag";
import StarIcon from "@assets/icons/star-solid.svg";
import ClockIcon from "@assets/icons/clock-solid.svg";
import ReleaseDateIcon from "@assets/icons/calendar-days-regular.svg";
import CastScrollingMenu from "@components/FilmDetails/CastScrollingMenu";
import Image from "next/image";
import { Movie } from "@utils/types";

interface FilmPageProps {
  id: string;
  isMovie: boolean;
}

interface Person {
  job: string;
}

interface GenreCode {
  id: number;
}

const FilmPage: React.FC<FilmPageProps> = ({ id, isMovie }: FilmPageProps) => {
  const [movies, setMovies] = useState<Movie>();
  const backgroundImage =
    movies && `url(https://image.tmdb.org/t/p/w1280/${movies?.backdrop_path})`;
  const posterImage =
    movies && `https://image.tmdb.org/t/p/w780/${movies?.poster_path}`;
  const director = movies?.credits?.crew?.find(
    (person: Person) => person.job.toLowerCase() === "director"
  );

  const formatRuntime = (minutes: number | undefined) => {
    if (minutes === undefined || minutes < 0) {
      return "Invalid input";
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatReleaseDate = (dateString: string | undefined) => {
    if (!dateString) {
      return "N/A";
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    axios
      .get(
        "/api/filmPage/requestMovie/" + `${isMovie ? "movie" : "tv"}` + "/" + id
      )
      .then((response) => {
        setMovies(response.data);
      });
  }, []);

  return (
    <>
      <div className="moviePage">
        <div
          className="backgroundImage"
          style={{
            backgroundImage: backgroundImage,
          }}
        >
          <div className="darkOverlay"></div>
        </div>
        <div className="movieInfo">
          <div className="firstHalf">
            <img
              className="movieDetailsImage"
              src={posterImage}
              alt="Movie Poster"
            />
          </div>
          <div className="secondHalf">
            <span className="secondHalfBackground"></span>
            <h1>{isMovie ? movies?.original_title : movies?.name}</h1>
            <div className="genresGroup">
              {movies?.genres
                ?.slice(0, 3)
                ?.map(({ id }: any, index: number) => (
                  <GenreTag
                    genreCode={id}
                    genreName={genres[id]}
                    isMovie
                    key={index}
                  />
                ))}
            </div>
            <div className="iconsGroup">
              {isMovie && (
                <div>
                  <Image
                    src={ClockIcon}
                    alt="Clock Icon"
                    className="detailIcons"
                  />{" "}
                  {formatRuntime(movies?.runtime)}
                </div>
              )}
              <div>
                <Image
                  src={ReleaseDateIcon}
                  alt="Release Date Icon"
                  className="detailIcons"
                />{" "}
                {formatReleaseDate(
                  isMovie ? movies?.release_date : movies?.first_air_date
                )}
              </div>
              <div>
                <Image src={StarIcon} alt="Star Icon" className="detailIcons" />{" "}
                <b>{movies?.vote_average.toFixed(1)}</b>/10
              </div>
            </div>
            <b>About:</b>
            <p>{movies?.overview}</p>
            {director && (
              <p>
                <b>Director:</b> {director?.name}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="castHeader">Top Cast</div>
      <CastScrollingMenu data={movies?.credits?.cast} />
    </>
  );
};

export default FilmPage;
