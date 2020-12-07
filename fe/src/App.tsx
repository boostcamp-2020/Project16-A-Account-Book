import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import AccountListPage from 'pages/AccountListPage';
import CalenderPage from 'pages/CalenderPage';
import AuthCheck from 'pages/AuthCheck';
import StatisticsPage from 'pages/StatisticsPage';
import useAccountInfo from 'hooks/useAccountInfo';
import LoginPage from './pages/LoginPage';
import OauthCallbackPage from './pages/OauthCallbackPage';
import MainPage from './pages/MainPage';
import CreateTransactionPage from './pages/CreateTransactionPage';
import CategoryPage from './pages/CategoryPage';

const TransactionRouter = () => {
  const { url } = useRouteMatch();
  useAccountInfo();
  return (
    <>
      <AuthCheck />
      <Switch>
        <Route
          path={`${url}/:owner/:title/create`}
          component={CreateTransactionPage}
        />
        <Route
          path={`${url}/:owner/:title/statistics`}
          component={StatisticsPage}
        />
        <Route
          path={`${url}/:owner/:title/calender`}
          component={CalenderPage}
        />
        <Route
          path={`${url}/:owner/:title/category`}
          component={CategoryPage}
        />
        <Route path={`${url}/:owner/:title`} component={MainPage} />
      </Switch>
    </>
  );
};

const LoginRouter = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${url}/oauth-callback`}
          component={OauthCallbackPage}
        />
        <Route path={`${url}`} component={LoginPage} />
      </Switch>
    </>
  );
};

const AccountRouter = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <AuthCheck />
      <Route path={`${url}`} component={AccountListPage} />
    </>
  );
};

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginRouter} />
          <Route path="/accounts" component={AccountRouter} />
          <Route path="/transactions" component={TransactionRouter} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
