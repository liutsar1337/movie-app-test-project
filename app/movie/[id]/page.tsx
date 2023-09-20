import { GetServerSideProps } from 'next';
import FilmPage from '@containers/FilmPage';

export const metadata = {
  title: 'Movie Details',
  description: 'Discover & Share Your Favorite Movies',
};

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return <FilmPage isMovie={true} id={params.id} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};
