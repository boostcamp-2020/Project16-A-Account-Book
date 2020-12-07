import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loadingImg from 'assets/svg/loading.svg';
import { TransactionStore } from 'stores/Transaction';
import auth from 'apis/auth';
import user from 'apis/user';
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
      const result: any = await auth.getAccessToken(code);
      setIsLoading(false);
      const { accounts } = result;
      const accountObjId = accounts[0];
      const titleResult: any = await user.getTitleById(accountObjId);
      const { title } = titleResult;
      TransactionStore.setAccountObjId(accountObjId);
      history.push(`/transactions/${title}`);
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
