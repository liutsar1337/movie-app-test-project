import { FunctionComponent } from "react";

export interface Actor {
  profile_path: string | null;
  character: string | null;
  name: string | null;
  [key: string]: any;
}

export interface Movie {
  backdrop_path?: string | null;
  genre_ids: number[];
  genres?: number[];
  runtime:number ;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path?: string | null;
  vote_average: number;
  vote_count: number;
  credits?: any;

  // Properties specific to TVShow
  first_air_date?: string;
  name?: string;
  origin_country?: string[];
  original_name?: string;

  // Properties specific to Movie
  adult?: boolean;
  original_title?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
}

export interface LandingPageProps {
  movies?: {
    results: Movie[] | undefined;
  };
  tvShows?: {
    results: Movie[];
  };
}

export interface MovieListResponse {
  results: Movie[];

}
