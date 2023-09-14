// eslint-disable-next-line
const apiKey = process.env.REACT_APP_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`,
  requestNowPlayingCustomPage: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=`,
  requestFeaturedTV:`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=1`,
  requestFeaturedTVCustomPage:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&page=`,
  requestMovie: `https://api.themoviedb.org/3/`,
  apiKey: `?api_key=${apiKey}&append_to_response=credits`
};

export default requests;
