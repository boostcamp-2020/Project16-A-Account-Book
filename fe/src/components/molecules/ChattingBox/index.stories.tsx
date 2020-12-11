import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import ChattingBox from '.';

export default {
  title: 'Molecules / ChattingBox',
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

export const defaultChattingBox = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChattingBox dataList={dataList} />
    </ThemeProvider>
  );
};
