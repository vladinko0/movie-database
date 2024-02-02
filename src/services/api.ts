import {Config} from './config';
import axios from 'axios';

const appApi = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onRequestFullFilled = async (request: any) => {
  console.log(
    '%c Starting api Request',
    'background: #33AAFF; color: #FFF',
    request,
  );

  return request;
};
const onRequestRejected = (error: any) => {
  return Promise.reject(error);
};

appApi.interceptors.request.use(onRequestFullFilled, onRequestRejected);

export default appApi;
