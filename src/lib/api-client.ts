import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: 'https://app.wewantwaste.co.uk/api',
});

function requestInterceptor(config: InternalAxiosRequestConfig) {
  config.headers.Accept = 'application/json';
  return config;
}

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);
