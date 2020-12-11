import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import ChattingArea from '.';

export default {
  title: 'organisms / ChattingArea',
};

const dataList = [
  {
    type: 'mine',
    chat: '채팅을 보내보자',
  },
  {
    type: 'mine',
    chat:
      '[Web발신] 신한카드승인\n윤*주\n19,500원체크\n12/03 12:49\n국민뼈감자탕',
  },
  {
    type: 'account',
    chat: '적용되었습니다',
  },
];

const onChangeHandler = () => {
  console.log('changed');
};

const onSubmitHandler = () => {
  console.log('submit');
};

export const defaultArea = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChattingArea
        dataList={dataList}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        chatValue="yeah"
      />
    </ThemeProvider>
  );
};
