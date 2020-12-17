import React, { useState } from 'react';
import FormTransactionTemplate from 'components/templates/FormTransaction';
import TransactionForm from 'components/organisms/TransactionForm';
import useTransactionInput from 'hooks/useTransactionInput';
import transactionAPI from 'apis/transaction';
import { TransactionStore } from 'stores/Transaction';
import { useHistory } from 'react-router-dom';
import { transactionValidator } from 'utils/validator';
import queryString from 'query-string';
import Header from 'components/organisms/HeaderBar';

const classifications = ['지출', '수입'];

const UpdateTransacionPage = ({ location }: { location: any }) => {
  const { transactionObjId } = queryString.parse(location.search);
  const [message, setMessage] = useState({
    client: '',
    price: '',
  });
  const [transactionState, setInputState] = useTransactionInput(
    transactionObjId as string,
  );
  const history = useHistory();

  const onSubmitHandler = async () => {
    const [isValid, errorMessage] = transactionValidator(transactionState);
    if (!isValid) {
      setMessage(errorMessage);
      return;
    }
    await transactionAPI.updateTransaction(
      TransactionStore.accountObjId,
      transactionObjId as string,
      transactionState,
    );
    history.goBack();
  };

  const onDeleteHandler = async (event: any) => {
    event.preventDefault();
    await transactionAPI.deleteTransaction(
      TransactionStore.accountObjId,
      transactionObjId as string,
    );
    history.goBack();
  };
  const inputFieldProps = {
    ...transactionState,
    classifications,
    formHandler: setInputState,
    message,
  };
  const Main = (
    <TransactionForm
      InputFieldProps={inputFieldProps}
      onSubmit={onSubmitHandler}
      isUpdate
      onDelete={onDeleteHandler}
    />
  );
  return (
    <FormTransactionTemplate
      header={<Header title="거래내역 수정" back />}
      main={Main}
    />
  );
};

export default UpdateTransacionPage;
