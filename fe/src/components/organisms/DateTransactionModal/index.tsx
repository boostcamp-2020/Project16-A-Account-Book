import React, { useRef, forwardRef } from 'react';
import { TransactionStore } from 'stores/Transaction';
import TransactionList from 'components/organisms/TransactionList';
import * as S from './style';

export interface Props {}

const onClickHandler = (contentRef: React.RefObject<HTMLDivElement>) => (
  e: React.MouseEvent<HTMLDivElement>,
) => {
  e.preventDefault();
  if (e.target === contentRef.current) {
    return;
  }
  TransactionStore.setModalVisible(false);
};

const DateTransactionModal = forwardRef(
  ({ ...props }: Props, ref: any): React.ReactElement => {
    const contentRef = useRef<HTMLDivElement>(null);
    return (
      <>
        <S.DateTransactionModal
          onClick={onClickHandler(contentRef)}
          ref={ref}
          {...props}
        />
        <S.Content ref={contentRef}>
          <TransactionList
            date={TransactionStore.modalData.date}
            transactionList={TransactionStore.modalData.transactionList}
            onClick={() => {}}
          />
        </S.Content>
      </>
    );
  },
);

export default DateTransactionModal;
