import React from 'react';
import MainPage from 'pages/MainPage';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';

const App = () => {
  return (
    <GlobalThemeProvider>
      <MainPage />
    </GlobalThemeProvider>
  );
};

export default App;
