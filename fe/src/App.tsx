import React from 'react';
import MainPage from 'pages/MainPage';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { TransactionStoreProvider } from 'stores/Transaction';

function App() {
  return (
    <GlobalThemeProvider>
      <TransactionStoreProvider>
        <MainPage />
      </TransactionStoreProvider>
    </GlobalThemeProvider>
  );
}

export default App;
