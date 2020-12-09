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

export const postMms = async (accountObjId: string, mmsObj: ParsedSMS) => {
  const method = await MethodModel.findOne({ title: mmsObj.cardname });
  if (!method) {
    const newMethod = await MethodModel.create({ title: mmsObj.cardname });
    newMethod.save();
  }
  const category = await CategoryModel.findOne({ title: '미등록' });
  if (category != null) {
    const newTransaction = await TransactionModel.create({
      client: mmsObj.cardname,
      method: mmsObj.cardname,
      category: category._id,
      date: new Date(mmsObj.date),
      price: mmsObj.amount,
    });
    newTransaction.save();
    await AccountModel.update(
      { _id: accountObjId },
      { $push: { transactions: newTransaction._id } },
    );
    return { success: true };
  }
  return { success: false, error: '미등록 카테고리가 존재하지 않습니다' };
};

export default {};
