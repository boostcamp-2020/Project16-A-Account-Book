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
  classification: '지출',
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
  const loadAndSetInitialMethod = async () => {
    await MethodStore.loadMethods();
    const initialMethod = MethodStore.getMethods()[0];
    setTransaction((prevState) => ({
      ...prevState,
      method: initialMethod._id,
    }));
  };
  useEffect(() => {
    const { classification } = transactionState;
    const defaultCategory = CategoryStore.getCategories(classification)[0];
    const input = defaultCategory ? defaultCategory._id : '';
    setTransaction((preState) => ({
      ...preState,
      category: input,
    }));
  }, [transactionState.classification]);

  useEffect(() => {
    CategoryStore.loadCategories();
    loadAndSetInitialMethod();
    if (transactionObjId) {
      // TODO: transaction 하나의 data 가져와서, initState에 넣어주기
    }
  }, []);
  return [transactionState, setInputState];
};
export default useTransactionInput;
