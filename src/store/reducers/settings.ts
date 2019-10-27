import actionTypes from '../action_types';
import { ISetSettingsAction } from '../actions/settings';
import { EFontFamily, ELang, ETheme, ISettings } from '../types';

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
  const {
    font_size = 14,
    font_family = EFontFamily.roboto,
    theme_type = ETheme.light,
    news_per_page = 10,
    news_lang = ELang.ru,
    sources = ['google-news-ru', 'lenta', 'rbc', 'rt'],
    is_endless_news_list = true,
  } = JSON.parse(JSONSettings);
  return {
    font_size,
    font_family,
    theme_type,
    news_per_page,
    news_lang,
    sources,
    is_endless_news_list,
  };
}

export default header;
