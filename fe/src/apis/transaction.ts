import { State as TransactionItem } from 'hooks/useTransactionInput';
import makeQueryString from 'utils/query';
import { TransactionDBType } from 'types';
import axios from './axios';
import url from './urls';

export default {
  getTransaction(transactionObjId: string): Promise<TransactionDBType> {
    return axios.get(url.transactionDetail(transactionObjId));
  },
  getTransactionList(accountObjId: string, query: object) {
    return axios.get(
      `${url.transaction(accountObjId)}${makeQueryString(query)}`,
    );
  },
  saveTransaction(accountObjId: string, transaction: TransactionItem) {
    return axios.post(url.transaction(accountObjId), { transaction });
  },
  updateTransaction(transactionObjId: string, transaction: TransactionItem) {
    return axios.put(url.transaction(transactionObjId), { transaction });
  },
};
