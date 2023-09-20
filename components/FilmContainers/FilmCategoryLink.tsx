import Link from 'next/link';
import React, { ReactNode } from 'react';
import './FilmContainer.css';

interface FilmCategoryLinkProps {
  children: ReactNode;
  link: string;
  className?: string;
}

const FilmCategoryLink: React.FC<FilmCategoryLinkProps> = ({
  children,
  link,
  className,
}: FilmCategoryLinkProps) => {
  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
  };

  return (
    <div>
      <Link style={linkStyle} href={link} className={`film-category-link ${className}`}>
        <span>{children}</span>
        <span className="arrowIcon"></span>
      </Link>
    </div>
  );
};

export default FilmCategoryLink;
