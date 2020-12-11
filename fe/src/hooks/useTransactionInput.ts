import { useState, useEffect } from 'react';
import utils from 'utils/date';
import { TransactionStore } from 'stores/Transaction';
import { MethodStore } from 'stores/Method';
import { CategoryStore, categoryType } from 'stores/Category';
import transactionAPI from 'apis/transaction';

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
  const loadAndSetInitialCategory = async () => {
    await CategoryStore.loadCategories();
    const initialCategory = CategoryStore.getCategories(
      transactionState.classification,
    )[0];
    setTransaction((prevState) => ({
      ...prevState,
      category: initialCategory._id,
    }));
  };

  const loadTransactionAndSetInitialInput = async () => {
    const transaction = await transactionAPI.getTransaction(
      TransactionStore.accountObjId,
      transactionObjId as string,
    );
    const { date, memo, client, price, method, category } = transaction;
    setTransaction({
      date: utils.dateFormatter(date),
      client,
      price,
      memo: memo || '',
      classification: category.type === categoryType.INCOME ? '수입' : '지출',
      method: method._id,
      category: category._id,
    });
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
    loadAndSetInitialCategory();
    loadAndSetInitialMethod();
    if (transactionObjId) {
      loadTransactionAndSetInitialInput();
    }
  }, []);
  return [transactionState, setInputState];
};
export default useTransactionInput;
