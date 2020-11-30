import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

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
      if (accounts.length === 0) {
        props.history.push('/');
      } else {
        localStorage.setItem('accountId', accounts[0].accountObjId);
        props.history.push(`/${accounts[0].accountObjId}`);
      }
    };
    getToken();
  }, []);
  return <div>{isLoading ? <div>로딩중</div> : <div>로딩완료</div>}</div>;
}

export default TempPage;
