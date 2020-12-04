import { useState, useEffect } from 'react';
import utils from 'utils/date';
import { MethodStore } from 'stores/Method';
import { CategoryStore } from 'stores/Category';

export interface State {
  date: string;
  client: string;
  memo: string;
  price: number;
  classification: string;
  category: string;
  method: string;
}
const initState = {
  date: utils.dateFormatter(new Date()),
  client: '',
  memo: '',
  price: 0,
  classification: '',
  category: '미분류',
  method: '',
};
const useTransactionInput = (transactionObjId?: string): [State, any] => {
  const [transactionState, setTransaction] = useState(initState);
  const setInputState = ({ target }: any): void => {
    const { name, value } = target;

    setTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    CategoryStore.loadCategories();
    MethodStore.loadMethods();
    if (transactionObjId) {
      // TODO: transaction 하나의 data 가져와서, initState에 넣어주기
    }
  }, []);
  return [transactionState, setInputState];
};
export default useTransactionInput;
