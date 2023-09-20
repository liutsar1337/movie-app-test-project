import React from 'react';
import Link from 'next/link';

interface GenreTagProps {
  genreName?: string;
  genreCode?: number;
  isMovie?: boolean;
}

const GenreTag: React.FC<GenreTagProps> = ({ genreName, genreCode, isMovie }: GenreTagProps) => {
  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
  };
  
  return (
    <Link
      className="genreTag"
      style={linkStyle}
      href={`https://www.themoviedb.org/genre/${genreCode}-${genreName}/${
        isMovie ? 'movie' : 'tv'
      }`}
      target="_blank"
      rel="noreferrer"
    >
      {genreName ? genreName : 'Action'}
    </Link>
  );
};

export default GenreTag;
