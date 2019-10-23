import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../store/types';

interface ICustomThemeProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<ICustomThemeProviderProps> = ({ children }) => {
  const settings = useSelector((state: IStore) => state.settings);
  const { font_size, font_family, theme_type } = settings;
  const theme = createMuiTheme({
    palette: {
      type: theme_type,
    },
    typography: {
      fontFamily: font_family,
      fontSize: font_size,
    },
  });
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
};

export default CustomThemeProvider;
