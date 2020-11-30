import { State as TransactionItem } from 'hooks/useTransactionInput';
import axios from './axios';
import url from './urls';

export default {
  saveTransaction(accountObjId: string, transaction: TransactionItem) {
    return axios.post(url.transaction(accountObjId), { transaction });
  },
};
