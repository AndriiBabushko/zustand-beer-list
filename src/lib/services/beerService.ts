import { AxiosResponse } from 'axios';
import { FetchResponse } from '../responses/beer';
import { axiosInstance } from '../axios';

export default class BeerService {
  static async fetchBeers(): Promise<AxiosResponse<FetchResponse>> {
    return await axiosInstance.get<FetchResponse>('');
  }

  static async fetchBeersByPage(page: number): Promise<AxiosResponse<FetchResponse>> {
    return await axiosInstance.get<FetchResponse>(`?page=${page}`);
  }

  static async fetchBeersByIndex(index: number): Promise<AxiosResponse<FetchResponse>> {
    return await axiosInstance.get<FetchResponse>(`${index}`);
  }
}
