import React from 'react';
import genres from '@utils/genres';
import RatingStars from '@components/RatingStars';
import GenreTag from '@components/GenreTag';
import MoviePageLink from './MoviePageLink';

interface MovieData {
  genre_ids: number[];
  vote_average: number;
  title?: string;
  overview: string;
  id: number;
}

interface SwiperBannerOverlayProps {
  className?: string;
  data: MovieData;
  number:number;
}

const SwiperBannerOverlay: React.FC<SwiperBannerOverlayProps> = ({
  data,
}: SwiperBannerOverlayProps) => {
  const genreCode = data.genre_ids[0];
  const genreName = genres[genreCode];

  return (
    <>
      <div className='overlay'>
        <span className='leftShadow'></span>
        <div className='halfScreen'>
          <GenreTag genreCode={genreCode} genreName={genreName} isMovie />
          <RatingStars data={data.vote_average} />
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <MoviePageLink id={data.id} isMovie>
            <button>
              <span>Watch now</span>
            </button>
          </MoviePageLink>
        </div>
        <div></div>
        <span className='rightShadow'></span>
      </div>
    </>
  );
};

export default SwiperBannerOverlay;
