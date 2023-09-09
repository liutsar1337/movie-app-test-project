const apiKey = "3deabd483da709910f2706b90bdf2f18";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`,
};

export default requests;
