import axios from 'axios';

function configureAxios() {
  axios.defaults.baseURL = 'https://newsapi.org/v2';
  axios.interceptors.request.use(requestInterseptor);
}

function requestInterseptor(config: any) {
  config.url = config.url + '?apiKey=2c94abfa63bf4c82a972095650b5f0ab';
  return config;
}
export default configureAxios;
