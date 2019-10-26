import axios from 'axios';
import { INews } from '../../store/types';

export interface INewsResponse {
  articles: INews[];
  totalResults: number;
}

enum ESortBy {
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

export const fetchNews = (
  pageSize: number,
  page: number,
  lang: string,
  from?: Date,
  to?: Date,
  sortBy?: ESortBy,
  q?: string,
) =>
  axios.get<INewsResponse>('', {
    params: {
      page,
      pageSize,
      from: new Date(),
      to,
      sortBy: 'publishedAt',
      q,
      language: lang,
      domain: 'ru',
    },
  });
