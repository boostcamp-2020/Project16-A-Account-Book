import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import LoginPage from './pages/LoginPage';
import OauthCallbackPage from './pages/OauthCallbackPage';
import MainPage from './pages/MainPage';
import CreateTransactionPage from './pages/CreateTransactionPage';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/oauth-callback" component={OauthCallbackPage} />
          <Route
            path="/:account/transactions/create"
            component={CreateTransactionPage}
          />
          <Route path="/:account" component={MainPage} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
