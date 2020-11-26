import React from 'react';
import MainPage from 'pages/MainPage';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
