import { combineReducers } from 'redux';

import { IState } from '../types';
import header from './header';
import mobile_drawer from './mobile_drawer';
import settings from './settings';

const reducers = combineReducers<IState>({
  header,
  settings,
  isMobileDrawerOpen: mobile_drawer,
});

export default reducers;
