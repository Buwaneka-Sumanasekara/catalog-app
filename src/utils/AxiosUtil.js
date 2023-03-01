import axios from 'axios';
import { API_URL, DEFAULT_TIMEOUT } from '@env';

export const getAxios = () => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: DEFAULT_TIMEOUT ? parseInt(DEFAULT_TIMEOUT) : 0,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};
