import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TempPage from './pages/TempPage';
import MainPage from './pages/MainPage';

function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/temppage/:code" component={TempPage} />
      </Switch>
    </Router>
  );
}

export default App;
