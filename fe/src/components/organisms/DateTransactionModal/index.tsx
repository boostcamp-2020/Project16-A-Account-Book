import React, { useRef } from 'react';
import { TransactionStore } from 'stores/Transaction';
import TransactionList from 'components/organisms/TransactionList';
import { useHistory, useParams } from 'react-router-dom';
import * as S from './style';

export interface Props {
  refs: any;
}

const visibleHandler = (contentRef: React.RefObject<HTMLDivElement>) => (
  e: React.MouseEvent<HTMLDivElement>,
) => {
  e.preventDefault();
  if (e.target === contentRef.current) {
    return;
  }
  TransactionStore.setModalVisible(false);
};

const DateTransactionModal = ({
  refs,
  ...props
}: Props): React.ReactElement => {
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
        ref={refs}
        {...props}
      />
      <S.Content ref={contentRef}>
        <TransactionList
          date={TransactionStore.modalClickDate}
          transactionList={TransactionStore.clickedModalTransactionList}
          onClick={onClickHandler}
        />
      </S.Content>
    </>
  );
};

export default DateTransactionModal;
