import { AccountModel } from 'models/account';
import { CategoryModel, categoryType } from 'models/category';
import { TransactionModel } from 'models/transaction';
import { getCompFuncByKey } from 'libs/utils';
import { ITotalPrice, ICategoryStatistics, IStatistics } from './index.type';

const getSumByCategories = (
  transactions: Array<any>,
): { totalPrice: ITotalPrice; incomeObject: object; expenseObject: object } => {
  const initState = {
    totalPrice: { income: 0, expense: 0 },
    incomeObject: {},
    expenseObject: {},
  };
  const calculateTotalPriceByCategory = (state: any, transaction: any) => {
    const newState = state;
    const { price } = transaction;
    const { type, title, _id, color } = transaction.category;
    const [totalType, catType] =
      type === categoryType.EXPENSE
        ? ['expense', 'expenseObject']
        : ['income', 'incomeObject'];
    newState.totalPrice[totalType] += price;
    if (newState[catType][title]) {
      newState[catType][title].totalPrice += price;
    } else {
      newState[catType][title] = {
        _id,
        title,
        color,
        totalPrice: price,
      };
    }
    return newState;
  };
  return transactions.reduce(calculateTotalPriceByCategory, initState);
};

const calculatePercentAndGetArray = (
  categoryObject: any,
  totalTypePrice: number,
): ICategoryStatistics[] => {
  return Object.keys(categoryObject).map((title) => {
    const { _id, color, totalPrice } = categoryObject[title];
    return {
      title,
      color,
      _id,
      totalPrice,
      percent: Math.round((totalPrice / totalTypePrice) * 100),
    };
  });
};

export const getCategoryStatistics = async (
  accountObjId: string,
  startDate: string,
  endDate: string,
): Promise<IStatistics> => {
  const transactions = await AccountModel.findByPkAndGetTransCategory(
    accountObjId,
    startDate,
    endDate,
  );
  const { totalPrice, incomeObject, expenseObject } = getSumByCategories(
    transactions,
  );
  const incomePercentArray = calculatePercentAndGetArray(
    incomeObject,
    totalPrice.income,
  );
  const expensePercentArray = calculatePercentAndGetArray(
    expenseObject,
    totalPrice.expense,
  );
  const incomeCategories = incomePercentArray.sort(
    getCompFuncByKey('percent', false),
  );
  const expenseCategories = expensePercentArray.sort(
    getCompFuncByKey('percent', false),
  );
  return {
    totalPrice,
    incomeCategories,
    expenseCategories,
  };
};

export const getCategories = async (accountObjId: string) => {
  const res = await AccountModel.findOne({ _id: accountObjId })
    .populate('categories')
    .exec();
  const categorisedType = res?.categories?.reduce((acc: any, cur: any) => {
    const { type } = cur;
    if (!acc[type]) acc[type] = [];
    acc[type].push(cur);
    return acc;
  }, {});

  return categorisedType;
};

export const postCategory = async (
  type: string,
  title: string,
  color: string,
  accountObjId: string,
) => {
  const res = await CategoryModel.findOne({ title });
  if (res != null) {
    return { success: false, error: '중복된 타이틀 존재' };
  }
  const newCategory = new CategoryModel({
    type,
    title,
    color,
  });
  try {
    await newCategory.save();
    await AccountModel.update(
      { _id: accountObjId },
      { $push: { categories: newCategory._id } },
    );
    return { success: true, newCategory };
  } catch (e) {
    return { success: false, message: e };
  }
};

export const updateCategory = async (
  objId: string,
  type: string,
  title: string,
  color: string,
  accountObjId: string,
) => {
  const exist: any = await AccountModel.findById(accountObjId, {
    categories: true,
  }).populate({
    path: 'categories',
    match: { type, title },
    select: '_id',
  });

  if (
    String(exist.categories[0]._id) === objId ||
    exist.categories.length === 0
  ) {
    await CategoryModel.update(
      { _id: objId },
      { $set: { type, title, color } },
    );
    return {
      success: true,
    };
  }
  return { success: false, error: '중복되는 카테고리가 존재합니다' };
};

export const deleteOneCategory = async (
  accountObjId: string,
  objId: string,
) => {
  const unclassifiedCategory = await AccountModel.findUnclassifiedCategory(
    accountObjId,
  );

  return Promise.all([
    TransactionModel.updateMany(
      { category: objId },
      { category: unclassifiedCategory },
    ).exec(),
    CategoryModel.deleteOne({ _id: objId }),
  ]);
};

export default {};
