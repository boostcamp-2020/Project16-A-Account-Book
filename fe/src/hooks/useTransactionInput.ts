import { useState, useEffect } from 'react';
import utils from 'utils/date';

const initState = {
  date: utils.dateFormatter(new Date()),
  client: '',
  memo: '',
  price: 0,
  classification: '',
  category: '미분류',
  method: '',
};

const useTransactionInput = (modification: boolean) => {
  const [transactionState, setTransaction] = useState(initState);
  const setInputState = ({ target }: any): void => {
    const { name, value } = target;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (modification) {
      //
    }
  }, []);
  return [transactionState, setInputState];
};
export default useTransactionInput;
