import React, { useState } from 'react';
import ChattingTemplate from 'components/templates/ChattingTemplate';
import Header from 'components/organisms/HeaderBar';
import ChattingArea from 'components/organisms/ChattingArea';
import NavBar from 'components/organisms/NavBar';
import { ChattingStore } from 'stores/Chatting';

const myMessage = 'mine';

const ChattingPage = () => {
  const [changedValue, setChangedValue] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setChangedValue(e.target.value);
  };

  const onSubmitHandler = () => {
    setChangedValue('');
    ChattingStore.addChat(changedValue, myMessage);
  };

  const ChattingContent = (
    <ChattingArea
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      dataList={ChattingStore.getChattings()}
      chatValue={changedValue}
    />
  );
  return (
    <ChattingTemplate
      headerContent={<Header />}
      bodyContent={ChattingContent}
      bottomContent={<NavBar />}
    />
  );
};

export default ChattingPage;
