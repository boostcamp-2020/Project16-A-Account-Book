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
  category: '',
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
  const setInitialMethod = () => {
    const initialMethod = MethodStore.getMethods()[0];
    setTransaction((prevState) => ({
      ...prevState,
      method: initialMethod?.id,
    }));
  };
  const setInitialCategory = () => {
    const initialCategory = CategoryStore.getCategories(
      transactionState.classification,
    )[0];
    setTransaction((prevState) => ({
      ...prevState,
      category: initialCategory?.id,
    }));
  };

  const loadCategoryMethod = async () => {
    await Promise.all([
      CategoryStore.loadCategories(),
      MethodStore.loadMethods(),
    ]);
  };
  const getUnclassfiedCategoryId = () => {
    const categories = CategoryStore.getCategories(
      transactionState.classification,
    );
    const foundCategory = categories.find((item) => item.title !== '미분류');
    if (!foundCategory) {
      return '';
    }
    return foundCategory.id;
  };
  const loadTransactionAndSetInitialInput = async () => {
    const transaction = await transactionAPI.getTransaction(
      TransactionStore.accountObjId,
      transactionObjId as string,
    );
    const {
      date,
      memo,
      client,
      price,
      methodId,
      classification,
      categoryId,
    } = transaction;

    setTransaction({
      date: utils.dateFormatter(date),
      client,
      price,
      memo: memo || '',
      classification: classification === categoryType.INCOME ? '수입' : '지출',
      method: String(methodId),
      category:
        classification === '미분류'
          ? getUnclassfiedCategoryId()
          : String(categoryId),
    });
  };
  useEffect(() => {
    const { classification } = transactionState;
    const defaultCategory = CategoryStore.getCategories(classification)[0];
    const input = defaultCategory ? defaultCategory.id : '';
    setTransaction((preState) => ({
      ...preState,
      category: input,
    }));
  }, [transactionState.classification]);
  useEffect(() => {
    loadCategoryMethod();
    if (transactionObjId) {
      loadTransactionAndSetInitialInput();
    } else {
      setInitialCategory();
      setInitialMethod();
    }
  }, []);
  return [transactionState, setInputState];
};
export default useTransactionInput;
