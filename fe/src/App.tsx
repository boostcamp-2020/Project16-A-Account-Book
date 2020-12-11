import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import AccountListPage from 'pages/AccountListPage';
import AccountUpdatePage from 'pages/AccountUpdatePage';
import CalendarPage from 'pages/CalendarPage';
import AuthCheck from 'pages/AuthCheck';
import StatisticsPage from 'pages/StatisticsPage';
import StatisticsDetailPage from 'pages/StatisticsDetailPage';
import useAccountInfo from 'hooks/useAccountInfo';
import LoginPage from './pages/LoginPage';
import OauthCallbackPage from './pages/OauthCallbackPage';
import MainPage from './pages/MainPage';
import CreateTransactionPage from './pages/CreateTransactionPage';
import UpdateTransactionPage from './pages/UpdateTransactionPage';
import CategoryPage from './pages/CategoryPage';
import NotFoundPage from './pages/NotFoundPage';
import ChattingPage from './pages/ChattingPage';

const TransactionRouter = () => {
  const { url } = useRouteMatch();
  const [loading] = useAccountInfo();
  return (
    <>
      <AuthCheck />
      {!loading && (
        <>
          <Switch>
            <Route
              path={`${url}/:owner/:title/create`}
              component={CreateTransactionPage}
            />
            <Route
              path={`${url}/:owner/:title/update`}
              component={UpdateTransactionPage}
            />
            <Route
              path={`${url}/:owner/:title/statistics/detail`}
              component={StatisticsDetailPage}
            />
            <Route
              path={`${url}/:owner/:title/statistics`}
              component={StatisticsPage}
            />
            <Route
              path={`${url}/:owner/:title/calendar`}
              component={CalendarPage}
            />
            <Route
              path={`${url}/:owner/:title/category`}
              component={CategoryPage}
            />
            <Route
              path={`${url}/:owner/:title/chatting`}
              component={ChattingPage}
            />
            <Route path={`${url}/:owner/:title`} component={MainPage} />
          </Switch>
        </>
      )}
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
      <Switch>
        <Route path={`${url}/update`} component={AccountUpdatePage} />
        <Route path={`${url}`} component={AccountListPage} />
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Redirect to="/accounts" />;
            }}
          />
          <Route path="/login" component={LoginRouter} />
          <Route path="/accounts" component={AccountRouter} />
          <Route path="/transactions" component={TransactionRouter} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
