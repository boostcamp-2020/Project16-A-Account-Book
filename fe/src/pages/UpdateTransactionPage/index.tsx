import React from 'react';
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
  const [transactionState, setInputState] = useTransactionInput(
    transactionObjId as string,
  );
  const history = useHistory();

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
    const flag = transactionValidator(transactionState);

    if (!flag) {
      alert('🙀입력을 확인하세요!🙀');
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
      header={<Header title="거래내역 수정" />}
      main={Main}
    />
  );
};

export default UpdateTransacionPage;
