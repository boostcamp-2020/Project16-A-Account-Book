import { State as TransactionItem } from 'hooks/useTransactionInput';
import makeQueryString from 'utils/query';
import { TransactionDBType } from 'types';
import axios from './axios';
import url from './urls';

export default {
  getTransaction(
    accountObjId: string,
    transactionObjId: string,
  ): Promise<TransactionDBType> {
    return axios.get(url.transactionDetail(accountObjId, transactionObjId));
  },
  getTransactionList(accountObjId: string, query: object) {
    return axios.get(
      `${url.transaction(accountObjId)}${makeQueryString(query)}`,
    );
  },
  saveTransaction(accountObjId: string, transaction: TransactionItem) {
    return axios.post(url.transaction(accountObjId), { transaction });
  },
  updateTransaction(
    accountObjId: string,
    transactionObjId: string,
    transaction: TransactionItem,
  ) {
    return axios.put(url.transactionUpdate(accountObjId, transactionObjId), {
      transaction,
    });
  },
  deleteTransaction(accountObjId: string, transactionObjId: string) {
    return axios.delete(url.transactionDelete(accountObjId, transactionObjId));
  },
};
