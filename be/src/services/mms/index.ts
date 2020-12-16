import { MethodModel } from 'models/method';
import { TransactionModel } from 'models/transaction';
import { AccountModel } from 'models/account';

export interface ParsedSMS {
  cardname: string;
  amount: number;
  date: string;
  time: string;
  transactionType: string;
  cardType: string;
  isDeposit: Boolean;
}

export const postMms = async (
  accountObjId: string,
  mmsObj: ParsedSMS,
  client: string,
) => {
  let method = await AccountModel.findMethodByTitle(
    accountObjId,
    mmsObj.cardname,
  );
  if (!method[0]) {
    method = await MethodModel.create({
      title: mmsObj.cardname,
    });
    await AccountModel.findByPkAndPushMethod(accountObjId, method._id);
  } else [method] = method;
  const unclassifiedId = await AccountModel.findUnclassifiedCategory(
    accountObjId,
  );
  if (unclassifiedId != null) {
    const newTransaction = await TransactionModel.create({
      client,
      method: method._id,
      category: unclassifiedId,
      date: new Date(`${mmsObj.date} ${mmsObj.time}`),
      price: mmsObj.amount,
      memo: '문자로 추가',
      excludeFromBudget: false,
      isDeleted: false,
    });
    await AccountModel.updateOne(
      { _id: accountObjId },
      { $push: { transactions: newTransaction._id } },
    );
    return { success: true };
  }
  return { success: false, error: '미분류 카테고리가 존재하지 않습니다' };
};

export default {};
