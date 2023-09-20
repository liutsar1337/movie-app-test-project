import FilmCategoryLink from "@components/FilmContainers/FilmCategoryLink";
import HorizontalScrollingMenu from "@components/FilmContainers/HorizontalScrollingMenu";
import "@components/FilmContainers/FilmContainer.css";
import "@styles/App.css";
import { LandingPageProps } from "@utils/types";

const TVCardContainer: React.FC<LandingPageProps> = ({
  tvShows,
}: LandingPageProps) => {
  return (
    <>
      <FilmCategoryLink
        className={"TVCategoryLink"}
        link="https://www.themoviedb.org/tv"
      >
        Featured TV shows
      </FilmCategoryLink>
      <HorizontalScrollingMenu data={tvShows?.results} isMovie={false} />
    </>
  );
};

export default TVCardContainer;
