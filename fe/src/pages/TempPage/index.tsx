import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import loadingImg from 'img/loading.gif';

export interface matchParams {
  code: string;
}

function TempPage(props: RouteComponentProps<matchParams>): React.ReactElement {
  const { match } = props;
  const { code } = match.params;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getToken = async () => {
      const result = await axios.get(
        `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/auth/github/access_token?code=${code}`,
        { withCredentials: true },
      );
      setIsLoading(false);
      const { accounts } = result.data;
      const accountObjId = accounts[0];
      const titleResult = await axios.get(
        `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/api/user/titleByAccountId?accountId=${accountObjId}`,
        { withCredentials: true },
      );
      const { title } = titleResult.data;
      localStorage.setItem('accountId', accountObjId);
      localStorage.setItem('title', title);
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
