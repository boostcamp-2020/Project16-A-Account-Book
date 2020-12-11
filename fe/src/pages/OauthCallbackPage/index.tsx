import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loadingImg from 'assets/svg/loading.svg';
import auth from 'apis/auth';
import qs from 'query-string';
import Container from './style';

function OauthCallbackPage({
  location,
}: {
  location: any;
}): React.ReactElement {
  const { code } = qs.parse(location.search);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const getToken = async () => {
      if (code == null) return;
      const res = await auth.getAccessToken(code);

      sessionStorage.setItem('userObjId', (res as any)._id);
      setIsLoading(false);
      history.push('/accounts');
    };
    getToken();
  }, []);
  const renderLoading = (
    <div className="emptyList" id="loading">
      <img id="loadingImg" src={loadingImg} alt="loading..." />
    </div>
  );

  return (
    <Container>{isLoading ? renderLoading : <div>로딩완료</div>}</Container>
  );
}

export default OauthCallbackPage;
