import axios from 'axios';

function configureAxios() {
  axios.defaults.baseURL = 'https://newsapi.org/v2';
  axios.interceptors.request.use(requestInterseptor);
}

function requestInterseptor(config: any) {
  config.url = config.url + '?apiKey=382ced45ced74984830768d974f7d31e';
  return config;
}
export default configureAxios;
