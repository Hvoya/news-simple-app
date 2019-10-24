export interface IState {
  header: IHeader;
  settings: ISettings;
  isMobileDrawerOpen: boolean;
}

export interface IHeader {
  title: string;
}

export enum EFontFamily {
  roboto = 'Roboto',
  open_sans = 'Open Sans',
}

export enum ETheme {
  dark = 'dark',
  light = 'light',
}

export enum ILang {
  ru = 'ru',
  en = 'en',
  zh = 'zh',
}

export interface ISettings {
  font_size: number;
  font_family: EFontFamily;
  theme_type: ETheme;
  news_per_page: number;
  news_lang: ILang;
}

export interface INews {
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
}
