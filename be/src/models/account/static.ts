import { IAccountDocument, IAccountModel } from '.';

export async function findByPkAndPushTransaction(
  this: any,
  accountObjId: string,
  transactionObjId: string,
) {
  return this.findByIdAndUpdate(accountObjId, {
    $push: { transactions: transactionObjId },
  }).exec();
}

export async function findByPkAndGetTransCategory(
  this: any,
  accountObjId: string,
  startDate: string,
  endDate: string,
) {
  const accountInfo = await this.findById(accountObjId, 'transactions')
    .populate({
      path: 'transactions',
      match: { date: { $gte: startDate, $lt: endDate } },
      select: 'price category date',
      populate: { path: 'category', select: 'type color title' },
    })
    .exec();
  return accountInfo.transactions;
}

export async function findByPkList(this: any, accountObjIdList: string[]) {
  const accounts = accountObjIdList.map((el: string) => {
    const result = this.findById(String(el)).exec();
    return result;
  });
  const result = await Promise.all(accounts);
  return result;
}

export class NotVaildException {
  message: string;

  status: number;

  constructor() {
    this.message = '잘못된 접근 입니다.';
    this.status = 400;
  }
}

export async function findByTitleAndOwner(
  this: IAccountModel,
  title: string,
  owner: string,
) {
  if (!title || !owner) throw new NotVaildException();

  return this.findOne({ title, owner }, { _id: true }).exec();
}
