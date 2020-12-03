import React from 'react';
import FormTransactionTemplate from 'components/templates/FormTransaction';
import TransactionForm from 'components/organisms/TransactionForm';
import useTransactionInput from 'hooks/useTransactionInput';
import transactionAPI from 'apis/transaction';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import { useHistory, useParams } from 'react-router-dom';

const classifications = ['지출', '수입'];

const CreateTransacionPage = () => {
  const [transactionState, setInputState] = useTransactionInput();
  const history = useHistory();
  const { title } = useParams<any>();

  const { date, client, memo, price, classification } = transactionState;
  const inputFieldProps = {
    date,
    client,
    memo,
    price,
    classification,
    classifications,
    formHandler: setInputState,
  };

  const onSubmitHandler = async () => {
    await transactionAPI.saveTransaction(
      TransactionStore.accountObjId,
      transactionState,
    );
    history.push(`/transactions/${title}`);
  };
  const Main = (
    <TransactionForm
      InputFieldProps={inputFieldProps}
      onSubmit={onSubmitHandler}
    />
  );

  return (
    <FormTransactionTemplate header={<div>트랜잭션 생성</div>} main={Main} />
  );
};

export default observer(CreateTransacionPage);
