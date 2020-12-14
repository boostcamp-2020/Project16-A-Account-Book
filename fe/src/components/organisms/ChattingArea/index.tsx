import React from 'react';
import { DataProps } from 'components/molecules/ChattingBox';
import * as S from './style';

export interface ChattingAreaProps {
  onChangeHandler: any;
  onSubmitHandler: any;
  dataList: DataProps[];
  chatValue: string;
}

const ChattingArea = ({
  onChangeHandler,
  onSubmitHandler,
  dataList,
  chatValue,
}: ChattingAreaProps) => {
  return (
    <S.ChattingArea>
      <S.ChatBox dataList={dataList} />
      <S.ChattingBottom>
        <S.ChattingInput
          disabled={false}
          placeholder="chat your message"
          onChangeHandler={onChangeHandler}
          value={chatValue}
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
