import React from 'react';
import * as S from './style';
// props 수정예정
const onChangeHandler = () => {
  console.log('input changed!');
};

const ChattingArea = () => {
  return (
    <S.ChattingArea>
      <S.ChatBox />
      <S.ChattingBottom>
        <S.ChattingInput
          disabled={false}
          placeholder="chat your message"
          onChangeHandler={onChangeHandler}
        />
        <S.ChattingBtn>전송</S.ChattingBtn>
      </S.ChattingBottom>
    </S.ChattingArea>
  );
};

export default ChattingArea;
