import axios from 'axios';
import { IFilters } from '../../components/FiltersPanel';
import { INews } from '../../store/types';

export interface INewsResponse {
  articles: INews[];
  totalResults?: number;
}

interface INewsRequestParams extends IFilters {
  pageSize: number;
  page: number;
  news_lang: string;
  sources: string[];
}

export const fetchNews = ({ pageSize, page, news_lang, from, to, sortBy, q, sources }: INewsRequestParams) => {
  return axios.get<INewsResponse>('/everything', {
    params: {
      page,
      pageSize,
      from,
      to,
      sortBy,
      q,
      language: news_lang,
      sources: sources.join(','),
    },
  });
};
