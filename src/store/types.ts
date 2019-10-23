export interface IStore {
  header: IHeader;
  settings: ISettings;
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

export interface ISettings {
  font_size: number;
  font_family: EFontFamily;
  theme_type: ETheme;
  news_per_page: number;
}

export interface INews {
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
}
