import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
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
import { SocketContext, socket } from './context';

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

const AccountRouter = React.lazy(() => import('routes/Account'));

const App = () => {
  return (
    <GlobalThemeProvider>
      <SocketContext.Provider value={socket}>
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
      </SocketContext.Provider>
    </GlobalThemeProvider>
  );
};

export default App;
