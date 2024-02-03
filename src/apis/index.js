import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://218.156.133.227:8080',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});
