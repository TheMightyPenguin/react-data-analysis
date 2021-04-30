import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import GlobalStyles from './GlobalStyles';

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </SCThemeProvider>
  );
};

export default ThemeProvider;
