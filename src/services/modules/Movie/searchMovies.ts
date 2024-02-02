import appApi from '../../api';
import {Config} from '../../config';
import {
  SearchRequestBody,
  SearchMovieResponse,
} from '../../../reduxStore/slices/types';

export const searchMovies = async (body: SearchRequestBody) => {
  try {
    let path = `${Config.API_URL}&s=${body.searchString}&page=${body.page}`;
    const res = await appApi.get(path);
    const response: SearchMovieResponse = {
      status: res.status,
      data: res.data,
    };
    switch (response.status) {
      case 401:
        response.error = 'Error while getting search movies data';
        response.data = null;
        break;
      case 201:
      case 200:
      case 204:
        break;
      default:
        response.error = res?.config.timeoutErrorMessage;
        response.data = null;
        break;
    }
    return response;
  } catch (error) {
    return error;
  }
};
