import {FooterProps} from '../../components/Footer/types';

export type TMovieItem = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type RenderMovieItem = {
  item: TMovieItem;
  index: number;
};

export type SearchProps = {
  renderFooter?: (props: FooterProps) => JSX.Element;
  renderMovieItem?: (props: RenderMovieItem) => JSX.Element;
};
