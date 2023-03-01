import axios from 'axios';

export const getAxios = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    timeout: process.env.DEFAULT_TIMEOUT ? parseInt(process.env.DEFAULT_TIMEOUT) : 0,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};
