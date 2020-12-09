import React from 'react';
import ChattingTemplate from 'components/templates/ChattingTemplate';
import Header from 'components/organisms/HeaderBar';
import ChattingArea from 'components/organisms/ChattingArea';
import NavBar from 'components/organisms/NavBar';

const dataList = [
  {
    type: 'mine',
    value: '채팅을 보내보자',
  },
  {
    type: 'mine',
    value:
      '[Web발신] 신한카드승인\n윤*주\n19,500원체크\n12/03 12:49\n국민뼈감자탕',
  },
  {
    type: 'account',
    value: '적용되었습니다',
  },
];

const onChangeHandler = () => {
  console.log('changed');
};

const onSubmitHandler = () => {
  console.log('submit');
};

const ChattingContent = (
  <ChattingArea
    onChangeHandler={onChangeHandler}
    onSubmitHandler={onSubmitHandler}
    dataList={dataList}
  />
);

const ChattingPage = () => {
  return (
    <ChattingTemplate
      headerContent={<Header />}
      bodyContent={ChattingContent}
      bottomContent={<NavBar />}
    />
  );
};

export default ChattingPage;
