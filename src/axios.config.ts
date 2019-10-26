import axios from 'axios';

function configureAxios() {
  axios.defaults.baseURL = 'https://newsapi.org/v2';
  axios.interceptors.request.use(requestInterseptor);
}

function requestInterseptor(config: any) {
  config.url = config.url + '?apiKey=382393a0ba1b46188baefe3dd4336faa';
  return config;
}
export default configureAxios;
