import { AccountModel } from 'models/account';
import { categoryType } from 'models/category';

const getSumByCategories = (transactions: Array<any>) => {
  const initState = {
    totalPrice: { income: 0, expense: 0 },
    incomeCategories: {},
    expenseCategories: {},
  };
  const reducer = (state: any, transaction: any) => {
    const copyState = state;
    const { type, title, _id: id } = transaction.category;
    const [totalType, catType] =
      type === categoryType.EXPENSE
        ? ['expense', 'expenseCategories']
        : ['income', 'incomeCategories'];
    copyState.totalPrice[totalType] += transaction.price;
    if (copyState[catType][title]) {
      copyState[catType][title].totalPrice += transaction.price;
    } else {
      copyState[catType][title] = {
        id,
        title,
        color: transaction.color,
        totalPrice: transaction.price,
      };
    }
    return copyState;
  };
  return transactions.reduce(reducer, initState);
};

export const getCategoryStatistics = async (
  accountObjId: string,
  startDate: string,
  endDate: string,
) => {
  const transactions = await AccountModel.findByPkAndGetTransCategory(
    accountObjId,
    startDate,
    endDate,
  );
  return getSumByCategories(transactions);
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
