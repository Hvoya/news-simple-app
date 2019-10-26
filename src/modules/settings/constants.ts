import { EFontFamily, ELang, ETheme } from '../../store/types';

export const fontSizes = [14, 16, 18, 20, 22, 24, 26];

export const themeTypes = [{ name: 'Светлая', value: ETheme.light }, { name: 'Тёмная', value: ETheme.dark }];

export const fontFamilyTypes = [EFontFamily.roboto, EFontFamily.open_sans];

export const langs = [
  { name: 'Русский', value: ELang.ru },
  { name: 'English', value: ELang.en },
  { name: '中国', value: ELang.zh },
];
