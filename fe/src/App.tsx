import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import LoginPage from './pages/LoginPage';
import TempPage from './pages/TempPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/temppage/:code" component={TempPage} />
          <Route path="/:account" component={MainPage} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
