import axios from 'axios';
import { INews } from '../../store/types';

export const fetchNews = (pageSize: number, page: number)  => axios.get<INewsResponse>('', {
  params: {
    page,
    pageSize,
  },
});

export interface INewsResponse {
  articles: INews[];
  totalResults: number;
}
