import axios from 'axios';

import { ELang, ISource } from '../../store/types';

export const fetchSources = (lang: ELang) => axios.get<ISourcesResponse>('/sources', { params: { language: lang } });

interface ISourcesResponse {
  sources: ISource[];
}
