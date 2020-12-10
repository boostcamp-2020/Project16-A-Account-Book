import { categoryType } from 'models/category';
import { AccountModel, IAccountModel } from '.';
import { UserModel } from '../user';

export async function findAllTransactionExceptDeleted(
  this: any,
  accountObjId: string,
  startDate: string,
  endDate: string,
) {
  const accountDocument = await this.findById(accountObjId, 'transactions')
    .populate({
      path: 'transactions',
      match: {
        date: { $gte: startDate, $lt: endDate },
        isDeleted: { $eq: false },
      },
      populate: { path: 'category method' },
    })
    .exec();
  return accountDocument.transactions;
}

export async function findAccountByUserId(this: any, userId: string) {
  const res = await AccountModel.find();
  const userAccountList = res.filter((account: any) => {
    return account.users.some((user: any) => {
      return String(user._id) === String(userId);
    });
  });
  return userAccountList;
}

export async function findByPkAndPushUser(
  this: any,
  userObjId: string,
  accountObjId: string,
) {
  const selectedUserModel = await UserModel.findById(userObjId);

  const result = await AccountModel.update(
    { _id: accountObjId },
    { $addToSet: { users: selectedUserModel } },
  );
  return result;
}

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
      match: {
        date: { $gte: startDate, $lt: endDate },
        isDeleted: { $eq: false },
      },
      select: 'price category date',
      populate: { path: 'category', select: 'type color title' },
    })
    .exec();
  return accountInfo.transactions;
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

  return this.findOne({ title, ownerName: owner }, { _id: true }).exec();
}

export async function findUnclassifiedMethod(
  this: IAccountModel,
  accountObjId: string,
) {
  const res: any = await this.findById(accountObjId, { methods: true })
    .populate({
      path: 'methods',
      match: { title: '미분류' },
      select: '_id',
    })
    .exec();
  return res.methods[0]._id;
}

export async function findUnclassifiedCategory(
  this: IAccountModel,
  accountObjId: string,
) {
  const res: any = await this.findById(accountObjId, { categories: true })
    .populate({
      path: 'categories',
      match: { type: categoryType.UNCLASSIFIED },
      select: '_id',
    })
    .exec();

  return res.categories[0]._id;
}
