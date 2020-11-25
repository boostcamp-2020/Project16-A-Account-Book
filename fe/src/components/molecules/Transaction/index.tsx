import React from 'react';
import doubleArrowIcon from 'assets/svg/doubleArrow.svg';
import {
  TransactionStyle,
  TransactionIcon,
  Client,
  Classification,
  Price,
  Wrap,
  Wrap1,
  Wrap2,
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
      <TransactionIcon
        icon={trans.icon ? trans.icon : doubleArrowIcon}
        size="sm"
      />
      <Wrap>
        <Wrap1>
          <Client>{trans.client}</Client>
          <Wrap2>
            <Classification>{classificationString}</Classification>
          </Wrap2>
        </Wrap1>
        <Price value={trans.price} />
      </Wrap>
    </TransactionStyle>
  );
};

export default Transaction;
