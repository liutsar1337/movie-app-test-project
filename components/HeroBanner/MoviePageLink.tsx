import Link from 'next/link';

interface MoviePageLinkProps {
  id: number;
  isMovie: boolean;
  children: React.ReactNode;
}

const MoviePageLink: React.FC<MoviePageLinkProps> = ({
  id,
  isMovie,
  children,
}: MoviePageLinkProps) => {
  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
  };
  
  return (
    <Link
      style={linkStyle}
      href={`${isMovie ? 'movie' : 'tv'}/${id}`}
    >
      {children}
    </Link>
  );
};

export default MoviePageLink;
