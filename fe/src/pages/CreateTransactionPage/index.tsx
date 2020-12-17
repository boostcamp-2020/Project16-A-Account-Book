import React, { useState } from 'react';
import FormTransactionTemplate from 'components/templates/FormTransaction';
import TransactionForm from 'components/organisms/TransactionForm';
import useTransactionInput from 'hooks/useTransactionInput';
import transactionAPI from 'apis/transaction';
import { TransactionStore } from 'stores/Transaction';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { transactionValidator } from 'utils/validator';
import Header from 'components/organisms/HeaderBar';

const classifications = ['지출', '수입'];

const CreateTransacionPage = () => {
  const [transactionState, setInputState] = useTransactionInput();
  const history = useHistory();
  const [message, setMessage] = useState({
    client: '',
    price: '',
  });

  const onSubmitHandler = async () => {
    const [isValid, errorMessage] = transactionValidator(transactionState);
    if (!isValid) {
      setMessage(errorMessage);
      return;
    }
    await transactionAPI.saveTransaction(
      TransactionStore.accountObjId,
      transactionState,
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
    />
  );

  return (
    <FormTransactionTemplate
      header={<Header title="거래내역 추가" back />}
      main={Main}
    />
  );
};

export default observer(CreateTransacionPage);
