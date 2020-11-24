import React from 'react';
import doubleArrowIcon from 'assets/svg/doubleArrow.svg';
import {
  TransactionStyle,
  TransactionIcon,
  Client,
  Classification,
  Price,
  Text,
  PaymentInfo,
} from './style';

export type transaction = {
  id: string;
  icon?: string;
  client: string;
  classification: string;
  method: string;
  price: number;
};

export interface Props {
  trans: transaction;
}

const Transaction = ({ trans, ...props }: Props) => {
  const classificationString = `${trans.classification} | ${trans.method}`;

  return (
    <TransactionStyle {...props}>
      <TransactionIcon icon={trans.icon || doubleArrowIcon} size="sm" />
      <Text>
        <PaymentInfo>
          <Client>{trans.client}</Client>
          <Classification>{classificationString}</Classification>
        </PaymentInfo>
        <Price value={trans.price} />
      </Text>
    </TransactionStyle>
  );
};

export default Transaction;
