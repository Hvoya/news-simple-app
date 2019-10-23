import actionTypes from '../action_types';
import { ISetSettingsAction } from '../actions/settings';
import { EFontFamily, ETheme, ISettings } from '../types';

const initialState: ISettings = initializeSettings();

const header = (state = initialState, action: ISetSettingsAction): ISettings => {
  switch (action.type) {
    case actionTypes.SET_SETTINGS: {
      return {
        ...state,
        ...action.settings,
      };
    }
    default:
      return state;
  }
};

function initializeSettings(): ISettings {
  const JSONSettings = localStorage.getItem('settings') || '{}';
  const settings = JSON.parse(JSONSettings);
  return {
    font_size: settings.font_size || 14,
    font_family: settings.font_family || EFontFamily.roboto,
    theme_type: settings.theme || ETheme.light,
    news_per_page: settings.news_per_page || 10,
  };
}

export default header;
