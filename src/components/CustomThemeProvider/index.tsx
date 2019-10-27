import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../store/types';

interface ICustomThemeProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<ICustomThemeProviderProps> = ({ children }) => {
  const settings = useSelector((state: IState) => state.settings);
  const { font_size, font_family, theme_type } = settings;
  let theme = createMuiTheme({
    palette: {
      type: theme_type,
    },
    typography: {
      fontFamily: font_family,
      fontSize: font_size,
      // Меняем заголовки (Стандартные слишком большие)
      h1: {
        fontSize: '1.6em',
        fontWeight: 400,
      },
      h2: {
        fontSize: '1.2em',
        fontWeight: 300,
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
