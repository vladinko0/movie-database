import appApi from '../../api';
import {Config} from '../../config';
import {
  DetailRequestBody,
  MovieDetailResponse,
} from '../../../reduxStore/slices/types';

export type Response = {};

export const movieDetail = async (body: DetailRequestBody) => {
  try {
    const path = `${Config.API_URL}&i=${body.i}`;
    const res = await appApi.get(path);
    const response: MovieDetailResponse = {
      status: res.status,
      data: res.data,
    };
    switch (response.status) {
      case 401:
        response.error = 'Error while getting movie detail data';
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
