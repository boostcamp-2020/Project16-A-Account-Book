import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import AccountTitleImageUpdate from 'components/organisms/AccountImageTitleUpdate';

interface Props {
  location?: any;
}

const AccountUpdatePage = ({ location }: Props) => {
  const [title, setTitle] = useState<String>(location.state.account.title);

  const Contents = (
    <>
      <AccountTitleImageUpdate
        account={location.state.account}
        title={title}
        setTitle={setTitle}
      />
    </>
  );

  return <Template HeaderBar={<Header />} Contents={Contents} />;
};

export default observer(AccountUpdatePage);
