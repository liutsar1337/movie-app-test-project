/* eslint-disable */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import requests from "../Requests";
import "../components/FilmDetails/FilmDetails.css";
import GenreTag from "../components/GenreTag";
import genres from "../assets/genres";

import StarIcon from "../assets/icons/star-solid.svg";
import ClockIcon from "../assets/icons/clock-solid.svg";
import ReleaseDateIcon from "../assets/icons/calendar-days-regular.svg";
import CastScrollingMenu from "../components/FilmDetails/CastScrollingMenu";

const FilmPage = ({isMovie=true}) => {
  

  let { id } = useParams();
  const [movies, setMovies] = useState();
  const backgroundImage = movies && `url(https://image.tmdb.org/t/p/w1280/${movies?.backdrop_path})`
  const posterImage = movies && `https://image.tmdb.org/t/p/w780/${movies?.poster_path}`
  const director = movies?.credits?.crew?.find(person => person.job.toLowerCase() === 'director')

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };
  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    axios.get(requests.requestMovie + `${isMovie ? 'movie' : 'tv'}`+ '/' + id + requests.apiKey).then((response) => {
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
            />
          </div>
          <div className="secondHalf">
            <span className="secondHalfBackground"></span>
            <h1>{isMovie ? movies?.original_title : movies?.name}</h1>
            <div className="genresGroup">
              {movies?.genres?.slice(0, 3)?.map((genreCode, index) => (
                <GenreTag
                  genreCode={genreCode.id}
                  genreName={genres[genreCode.id]}
                  isMovie
                  key={index}
                />
              ))}
            </div>
            <div className="iconsGroup">
              {isMovie && <div>
                <img src={ClockIcon} alt="Clock Icon" className="detailIcons" />{" "}
                {formatRuntime(movies?.runtime)}
              </div>}
              <div>
                <img
                  src={ReleaseDateIcon}
                  alt="Release Date Icon"
                  className="detailIcons"
                />{" "}
                {formatReleaseDate(isMovie ? movies?.release_date : movies?.first_air_date)}
              </div>
              <div>
                <img src={StarIcon} alt="Star Icon" className="detailIcons" />{" "}
                <b>{movies?.vote_average.toFixed(1)}</b>/10
              </div>
            </div>
            <b>About:</b>
            <p>{movies?.overview}</p>
            {director && <p><b>Director:</b> {director?.name}</p>}
          </div>
        </div>
      </div>
      <div className="castHeader">Top Cast</div>
      <CastScrollingMenu data={movies?.credits?.cast} />
    </>
  );
};

export default FilmPage;
