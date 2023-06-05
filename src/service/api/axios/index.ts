import axios from 'axios';

const baseURL = 'https://data.jsdelivr.com/v1/';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
