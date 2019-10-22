import { combineReducers } from 'redux';

import { IStore } from '../types';
import header from './header';

const reducers = combineReducers<IStore>({
  header,
});

export default reducers;
