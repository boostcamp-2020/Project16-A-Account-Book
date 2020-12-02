import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import loadingImg from 'img/loading.gif';
import { TransactionStore } from 'stores/Transaction';
import auth from 'apis/auth';
import user from 'apis/user';

export interface matchParams {
  code: string;
}

function TempPage(props: RouteComponentProps<matchParams>): React.ReactElement {
  const { match } = props;
  const { code } = match.params;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getToken = async () => {
      const result = await auth.getAccessToken(code);
      setIsLoading(false);
      const { accounts } = result.data;
      const accountObjId = accounts[0];
      const titleResult = await user.getTitleById(accountObjId);
      const { title } = titleResult.data;
      localStorage.setItem('accountId', accountObjId);
      localStorage.setItem('title', title);
      TransactionStore.setAccountObjId(accountObjId);
      props.history.push(`/${title}`);
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

export default TempPage;
