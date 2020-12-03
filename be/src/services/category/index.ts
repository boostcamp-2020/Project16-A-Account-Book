import { AccountModel } from 'models/account';
import { categoryType, ICategory } from 'models/category';
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
  const incomeCategories = calculatePercentAndGetArray(
    incomeObject,
    totalPrice.income,
  );
  const expenseCategories = calculatePercentAndGetArray(
    expenseObject,
    totalPrice.expense,
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

export default {};
