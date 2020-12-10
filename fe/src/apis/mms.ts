import axios from './axios';
import url from './urls';

export interface ParsedSMS {
  cardname: string;
  amount: number;
  date: string;
  time: string;
  transactionType: string;
  cardType: string;
  isDeposit: Boolean;
}

export default {
  async processChatting(
    accountObjId: string,
    mmsObj: ParsedSMS,
    client: string,
  ): Promise<any> {
    return axios.post(`${url.mms}`, { accountObjId, mmsObj, client });
  },
};
