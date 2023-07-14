import axios, { AxiosInstance } from 'axios';

export const API_URL = 'https://api.punkapi.com/v2/beers';

const axiosInstance: AxiosInstance = axios.create({ baseURL: API_URL });

export { axiosInstance };
