import FilmCategoryLink from "@components/FilmContainers/FilmCategoryLink";
import HorizontalScrollingMenu from "@components/FilmContainers/HorizontalScrollingMenu";
import "@components/FilmContainers/FilmContainer.css"
import "@styles/App.css"

const TVCardContainer = ({tvShows}) => {
  return (
    <>
      <FilmCategoryLink className={"TVCategoryLink"} link="https://www.themoviedb.org/tv">Featured TV shows</FilmCategoryLink>
      <HorizontalScrollingMenu data={tvShows.results}/>
    </>
  );
};

export default TVCardContainer;
