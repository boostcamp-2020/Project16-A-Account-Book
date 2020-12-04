import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loadingImg from 'img/loading.gif';
import { TransactionStore } from 'stores/Transaction';
import auth from 'apis/auth';
import user from 'apis/user';
import qs from 'query-string';

function OauthCallbackPage({
  location,
}: {
  location: any;
}): React.ReactElement {
  const { code } = qs.parse(location.search);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (code == null) return;
    const getToken = async () => {
      const result: any = await auth.getAccessToken(code);
      setIsLoading(false);
      const { accounts } = result;
      const accountObjId = accounts[0];
      const titleResult: any = await user.getTitleById(accountObjId);
      const { title } = titleResult;
      localStorage.setItem('accountId', accountObjId);
      localStorage.setItem('title', title);
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

  return <div>{isLoading ? renderLoading : <div>로딩완료</div>}</div>;
}

export default OauthCallbackPage;
