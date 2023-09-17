import FilmCategoryLink from "@components/FilmContainers/FilmCategoryLink";
import HorizontalScrollingMenu from "@components/FilmContainers/HorizontalScrollingMenu";

const MovieCardContainer = ({movies}) => {
  return (
    <>
      <FilmCategoryLink
        className={"MovieCategoryLink"}
        link="https://www.themoviedb.org/movie/now-playing"
      >
        New Releases
      </FilmCategoryLink>
      <HorizontalScrollingMenu data={movies?.results} isMovie />
    </>
  );
};

export default MovieCardContainer;
