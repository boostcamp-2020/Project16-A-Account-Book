import React from 'react';
import doubleArrowIcon from 'assets/svg/doubleArrow.svg';
import * as S from './style';

export interface Props {
  trans: any;
}

const Transaction = ({ trans, ...props }: Props) => {
  const classificationString = `${trans.category} | ${trans.method}`;

  return (
    <S.TransactionStyle {...props}>
      <S.TransactionIcon icon={trans.icon || doubleArrowIcon} size="sm" />
      <S.Text>
        <S.PaymentInfo>
          <S.Client>{trans.client}</S.Client>
          <S.Classification>{classificationString}</S.Classification>
        </S.PaymentInfo>
        <S.Price value={trans.price} />
      </S.Text>
    </S.TransactionStyle>
  );
};

export default Transaction;
