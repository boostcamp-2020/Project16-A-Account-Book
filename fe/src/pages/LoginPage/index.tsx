import React from 'react';
// import { useHistory } from 'react-router-dom'
import LoginTemplate from './templates';
import LoginButtons from '../../components/organisms/LoginButtons';

function LoginPage(): React.ReactElement {
  // const history = useHistory()
  return (
    <LoginTemplate headerContent="tempheader" oauthContent={LoginButtons} />
  );
}

export default LoginPage;
