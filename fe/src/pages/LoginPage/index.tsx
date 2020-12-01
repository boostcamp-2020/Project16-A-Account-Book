import React from 'react';
// import { useHistory } from 'react-router-dom'
import LoginTemplate from '../../components/templates/LoginTemplate';
import LoginButtons from '../../components/organisms/LoginButtons';
import Header from '../../components/organisms/Header';

function LoginPage(): React.ReactElement {
  return (
    <LoginTemplate headerContent={<Header />} oauthContent={<LoginButtons />} />
  );
}

export default LoginPage;
