import React from 'react';
// import { useHistory } from 'react-router-dom'
import LoginTemplate from '../../components/templates/LoginTemplate';
import LoginButtons from '../../components/organisms/LoginButtons';
import Header from '../../components/organisms/Header';

function LoginPage(): React.ReactElement {
  // const history = useHistory()
  return (
    <LoginTemplate headerContent={<Header />} oauthContent={<LoginButtons />} />
  );
}

export default LoginPage;
