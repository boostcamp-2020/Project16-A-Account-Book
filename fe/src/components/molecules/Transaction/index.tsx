import React from 'react';
import doubleArrowIcon from 'assets/svg/doubleArrow.svg';
import PriceWithSign from 'components/molecules/PriceWithSign';
import Icon from 'components/atoms/Icons';

import * as S from './style';

export interface Props {
  trans: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Transaction = ({ trans, onClick }: Props) => {
  const classificationString = `${trans.category} | ${trans.method}`;
  const type = trans.categoryType;

  return (
    <S.TransactionStyle onClick={() => onClick(trans.id)}>
      <Icon icon={trans.icon || doubleArrowIcon} size="sm" />
      <S.Text>
        <S.PaymentInfo>
          <S.Client>{trans.client}</S.Client>
          <S.Classification>{classificationString}</S.Classification>
        </S.PaymentInfo>
        <S.PriceWrap>
          <PriceWithSign price={trans.price} type={type} />
        </S.PriceWrap>
      </S.Text>
    </S.TransactionStyle>
  );
};

export default Transaction;
