import FilmPage from "@containers/FilmPage";

export const metadata = {
  title: "TV Show Details",
  description: "Discover & Share Your Favorite TV Shows",
};

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return <FilmPage isMovie={false} id={params.id} />;
};

export default Page;
