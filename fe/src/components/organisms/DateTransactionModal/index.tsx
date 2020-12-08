import React, { useRef, forwardRef } from 'react';
import { TransactionStore } from 'stores/Transaction';
import TransactionList from 'components/organisms/TransactionList';
import { useHistory, useParams } from 'react-router-dom';
import * as S from './style';

export interface Props {}

const visibleHandler = (contentRef: React.RefObject<HTMLDivElement>) => (
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
    const history = useHistory();
    const { title, owner } = useParams<{ title: string; owner: string }>();

    const onClickHandler = (id: string) => {
      history.push(
        `/transactions/${owner}/${title}/update?transactionObjId=${id}`,
      );
    };
    return (
      <>
        <S.DateTransactionModal
          onClick={visibleHandler(contentRef)}
          ref={ref}
          {...props}
        />
        <S.Content ref={contentRef}>
          <TransactionList
            date={TransactionStore.modalData.date}
            transactionList={TransactionStore.modalData.transactionList}
            onClick={onClickHandler}
          />
        </S.Content>
      </>
    );
  },
);

export default DateTransactionModal;
