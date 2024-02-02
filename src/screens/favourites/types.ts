import {FooterProps} from '../../components/Footer/types';
import {RenderMovieItem} from '../search/types';

export type FavouritesProps = {
  renderFooter?: (props: FooterProps) => JSX.Element;
  renderMovieItem?: (props: RenderMovieItem) => JSX.Element;
};
