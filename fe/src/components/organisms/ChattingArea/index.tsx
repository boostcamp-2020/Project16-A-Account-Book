import React from 'react';
import { DataProps } from 'components/molecules/ChattingBox';
import * as S from './style';

export interface ChattingAreaProps {
  onChangeHandler: any;
  onSubmitHandler: any;
  dataList: DataProps[];
}

const ChattingArea = ({
  onChangeHandler,
  onSubmitHandler,
  dataList,
}: ChattingAreaProps) => {
  return (
    <S.ChattingArea>
      <S.ChatBox dataList={dataList} />
      <S.ChattingBottom>
        <S.ChattingInput
          disabled={false}
          placeholder="chat your message"
          onChangeHandler={onChangeHandler}
        />
        <S.ChattingBtn
          onClick={onSubmitHandler}
          disabled={false}
          value="전송"
          type="button"
        />
      </S.ChattingBottom>
    </S.ChattingArea>
  );
};

export default ChattingArea;
