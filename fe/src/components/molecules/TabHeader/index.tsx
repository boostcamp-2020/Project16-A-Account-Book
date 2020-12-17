import theme from 'styles/theme';
import React from 'react';
import * as S from './style';

export interface Props {
  onClickHandler: any;
  selectedTab: number;
}

const titles = ['지출', '수입', '결재수단'];
const valueMap = new Map([
  ['지출', 'EXPENSE'],
  ['수입', 'INCOME'],
  ['결재수단', 'METHOD'],
]);

const TabHeader = ({ onClickHandler, selectedTab }: Props) => {
  return (
    <S.TabUI>
      {titles.map((title, idx) => {
        return (
          <S.TabButton
            key={valueMap.get(title)}
            id={String(idx)}
            value={valueMap.get(title)}
            type="button"
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
