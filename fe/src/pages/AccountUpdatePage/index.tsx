import React from 'react';
import { observer } from 'mobx-react-lite';
import Template from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import AccountTitleImageUpdate from 'components/organisms/AccountImageTitleUpdate';

interface Props {
  location?: any;
}

const AccountUpdatePage = ({ location }: Props) => {
  const Contents = (
    <>
      <AccountTitleImageUpdate account={location.state.account} />
    </>
  );

  return <Template HeaderBar={<Header />} Contents={Contents} />;
};

export default observer(AccountUpdatePage);
