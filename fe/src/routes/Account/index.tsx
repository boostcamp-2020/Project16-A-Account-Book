import React, { Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const AuthCheck = React.lazy(() => import('pages/AuthCheck'));
const AccountListPage = React.lazy(() => import('pages/AccountListPage'));
const AccountUpdatePage = React.lazy(() => import('pages/AccountUpdatePage'));

const AccountRouter = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthCheck />
        <Switch>
          <Route path={`${url}/update`} component={AccountUpdatePage} />
          <Route path={`${url}`} component={AccountListPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default AccountRouter;
