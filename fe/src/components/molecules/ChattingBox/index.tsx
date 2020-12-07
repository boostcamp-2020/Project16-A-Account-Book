import React from 'react';
import Corpus from 'components/atoms/Corpus';
import * as S from './style';

const myMessage = 'mine';

export interface DataProps {
  type: string;
  value: string;
}

export interface ChattingBoxProps {
  dataList: DataProps[];
}

const ChattingBox = ({ dataList }: ChattingBoxProps): React.ReactElement => {
  return (
    <S.ChattingBox>
      <S.ChattingArea>
        {dataList.map(
          (data: DataProps): React.ReactElement =>
            data.type === myMessage ? (
              <S.MyMessage>
                <Corpus type={data.type} chat={data.value} />
              </S.MyMessage>
            ) : (
              <S.ServerMessage>
                <Corpus type={data.type} chat={data.value} />
              </S.ServerMessage>
            ),
        )}
      </S.ChattingArea>
    </S.ChattingBox>
  );
};

export default ChattingBox;
