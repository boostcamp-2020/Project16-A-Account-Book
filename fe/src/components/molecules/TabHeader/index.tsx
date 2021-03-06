import theme from 'styles/theme';
import React from 'react';
import * as S from './style';

export interface Props {
  onClickHandler: any;
  selectedTab: number;
}

const titles = ['지출', '수입', '결제수단'];

const TabHeader = ({ onClickHandler, selectedTab }: Props) => {
  return (
    <S.TabUI>
      {titles.map((title, idx) => {
        return (
          <S.TabButton
            key={title}
            id={String(idx)}
            type="button"
            value={title}
            color={
              Number(selectedTab) === idx
                ? theme.color.selectedBlue
                : theme.color.subText
            }
            onClick={onClickHandler}
          />
        );
      })}
    </S.TabUI>
  );
};

export default React.memo(TabHeader);
