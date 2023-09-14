/* eslint-disable */
import React from "react";
import "../FilmDetails/FilmDetails.css"

function CastCard({actor}) {
  ;
  return (
    actor?.profile_path && (
    <div role="button" tabIndex={0} className="castCard card">
      <img
        className="posterImage"
        src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
      />
      <div className="cardOverlay">
        <p>{actor?.character}</p>
        <span className="activeOnHover">
            {actor?.name}
        </span>
      </div>
      <div className="bottomShadow"></div>
    </div>)
  );
}

export default CastCard;
