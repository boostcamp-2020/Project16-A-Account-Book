import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import AccountListPage from 'pages/AccountListPage';
import CalenderPage from 'pages/CalenderPage';
import LoginPage from './pages/LoginPage';
import OauthCallbackPage from './pages/OauthCallbackPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/oauth-callback" component={OauthCallbackPage} />
          <Route path="/transactions/:account" component={MainPage} />
          <Route path="/calender/:account" component={CalenderPage} />
          <Route path="/" component={AccountListPage} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
