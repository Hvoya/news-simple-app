import { combineReducers } from 'redux';

import { IStore } from '../types';
import header from './header';
import settings from './settings';

const reducers = combineReducers<IStore>({
  header,
  settings,
});

export default reducers;
