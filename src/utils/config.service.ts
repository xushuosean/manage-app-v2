import Axios from 'axios';
import qs from 'qs';

const service = Axios.create({
  timeout: 300000,
});

service.interceptors.request.use((config: any) => {
  config.headers.Authentication = sessionStorage.getItem('ms_username');
  switch(config.method) {
    case 'post': config.data = qs.parse({ ...config.data });break;
    case 'get': config.data = { ...config.params };break;
    case 'put': config.data = qs.parse({ ...config.data });break;
    default:
      break;
  }

  return config;
}, (error) => Promise.reject(error));

service.interceptors.response.use((response: any) => {
  return response;
}, (error) => Promise.reject(error));

export default service;
