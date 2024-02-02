import {TMovieItem} from '../../screens/search/types';

export interface MovieSliceProps {
  favourites: TMovieItem[];
}

export type FavouriteMovieAction = {
  payload: TMovieItem[];
};

export type FavouriteMovieState = {
  favourites: TMovieItem[];
};

export type SearchRequestBody = {
  searchString: string;
  page: number;
};
export type DetailRequestBody = {
  i: string;
};

export type MovieDetailData = {
  Title: string;
  Poster: string;
  Year: string;
  Genre: string;
  Plot: string;
};
export type MovieDetailResponse = {
  data: MovieDetailData | null;
  status: number;
  error?: string;
};

export type SearchData = {
  Search: TMovieItem[];
  totalResults: string;
};
export type SearchMovieResponse = {
  data: SearchData | null;
  status: number;
  error?: string;
};

export type DetailSuccessCallback = (response: MovieDetailResponse) => void;
export type DetailFailureCallback = (error: any) => void;
export type SearchSuccessCallback = (response: SearchMovieResponse) => void;
export type SearchFailureCallback = DetailFailureCallback;
