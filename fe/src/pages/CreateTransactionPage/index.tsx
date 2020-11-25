import React from 'react';
import FormTransactionTemplate from 'components/templates/FormTransaction';
import TransactionForm from 'components/organisms/TransactionForm';
import useTransactionInput from 'hooks/useTransactionInput';

const categories = ['미분류', '급여', '용돈', '금융수입'];
const methods = ['현금', '카드', '카카오뱅크', '네이버페이'];
const classifications = ['지출', '수입', '이체'];

const CreateTransacionPage = () => {
  const [transactionState, setInputState] = useTransactionInput();
  const { date, client, memo, price, classification } = transactionState;
  const inputFieldProps = {
    date,
    client,
    memo,
    price,
    classification,
    categories,
    methods,
    classifications,
    formHandler: setInputState,
  };
  const Main = (
    <TransactionForm
      InputFieldProps={inputFieldProps}
      onSubmit={(e: MouseEvent) => {
        e.preventDefault();
      }}
    />
  );

  return (
    <FormTransactionTemplate header={<div>트랜잭션 생성</div>} main={Main} />
  );
};

export default CreateTransacionPage;
