import React from 'react';
import Corpus from 'components/atoms/Corpus';
import * as S from './style';

const myMessage: string = String(window.sessionStorage.getItem('userObjId'));

export interface DataProps {
  type: string;
  chat: string;
}

export interface ChattingBoxProps {
  dataList: DataProps[];
  scroll?: any;
}

const ChattingBox = ({
  dataList,
  scroll,
}: ChattingBoxProps): React.ReactElement => {
  return (
    <S.ChattingBox>
      <S.ChattingArea ref={scroll}>
        {dataList.map(
          (data: DataProps): React.ReactElement =>
            data.type === myMessage ? (
              <S.MyMessage key={dataList.indexOf(data)}>
                <Corpus type={data.type} chat={data.chat} />
              </S.MyMessage>
            ) : (
              <S.ServerMessage key={dataList.indexOf(data)}>
                <Corpus type={data.type} chat={data.chat} />
              </S.ServerMessage>
            ),
        )}
      </S.ChattingArea>
    </S.ChattingBox>
  );
};

export default ChattingBox;
