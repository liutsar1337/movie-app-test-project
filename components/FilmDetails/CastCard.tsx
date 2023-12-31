import React from 'react';
import { Actor } from '@utils/types';
import '../FilmDetails/FilmDetails.css';
import Image from 'next/legacy/image';

interface CastCardProps {
  actor: Actor | null;
}

function CastCard({ actor }: CastCardProps) {
  return (
    actor?.profile_path && (
      <div role="button" tabIndex={0} className="castCard card">
        <Image
          priority
          width={292}
          height={440}
          layout="responsive"
          className="posterImage"
          src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`}
          alt={actor?.name || 'Actor Profile'}
        />
        <div className="cardOverlay">
          <p>{actor?.character}</p>
          <span className="activeOnHover">{actor?.name}</span>
        </div>
        <div className="bottomShadow"></div>
      </div>
    )
  );
}

export default CastCard;
