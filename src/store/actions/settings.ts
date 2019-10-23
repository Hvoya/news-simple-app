import actionTypes from '../action_types';
import { EFontFamily, ETheme } from '../types';

interface ISetSettingsActionPayload {
  font_size?: number;
  font_family?: EFontFamily;
  theme_type?: ETheme;
  news_per_page?: number;
}

export interface ISetSettingsAction {
  type: actionTypes.SET_SETTINGS;
  settings: ISetSettingsActionPayload;
}

export const setSettings = (settings: ISetSettingsActionPayload): ISetSettingsAction => {
  return {
    settings,
    type: actionTypes.SET_SETTINGS,
  };
};
