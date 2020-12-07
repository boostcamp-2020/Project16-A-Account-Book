import { State as TransactionItem } from 'hooks/useTransactionInput';
import makeQueryString from 'utils/query';
import axios from './axios';
import url from './urls';

export default {
  getTransaction(transactionObjId: string) {
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
};
