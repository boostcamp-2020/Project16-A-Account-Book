import React from 'react';
import FormTransactionTemplate from 'components/templates/FormTransaction';
import TransactionForm from 'components/organisms/TransactionForm';
import useTransactionInput from 'hooks/useTransactionInput';
import transactionAPI from 'apis/transaction';
import { useHistory, useParams } from 'react-router-dom';
import isCanSubmit from 'utils/isCanSubmit';
import queryString from 'query-string';

const classifications = ['지출', '수입'];

const UpdateTransacionPage = ({ location }: { location: any }) => {
  const { transactionObjId } = queryString.parse(location.search);
  const [transactionState, setInputState] = useTransactionInput(
    transactionObjId as string,
  );
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

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
    const flag = isCanSubmit(transactionState);

    if (!flag) {
      alert('🙀입력을 확인하세요!🙀');
      return;
    }
    await transactionAPI.updateTransaction(
      transactionObjId as string,
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
    <FormTransactionTemplate header={<div>트랜잭션 수정</div>} main={Main} />
  );
};

export default UpdateTransacionPage;
