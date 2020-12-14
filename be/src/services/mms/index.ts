import { MethodModel } from 'models/method';
import { TransactionModel } from 'models/transaction';
import { CategoryModel } from 'models/category';
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
  let method = await MethodModel.findOne({ title: mmsObj.cardname });
  if (!method) {
    method = await MethodModel.create({ title: mmsObj.cardname });
  }
  const category = await CategoryModel.findOne({ title: '미분류' });
  if (category != null) {
    const newTransaction = await TransactionModel.create({
      client,
      method: method._id,
      category: category._id,
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
