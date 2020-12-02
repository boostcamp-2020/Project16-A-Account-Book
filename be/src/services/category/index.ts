import { AccountModel } from 'models/account';
import { categoryType } from 'models/category';

const sumPricesByType = (transactions: Array<any>) => {
  const initTotalPrice = { income: 0, expense: 0 };
  const totalPrice = transactions.reduce((sumPrice, transaction) => {
    if (transaction.category.type === categoryType.EXPENSE) {
      return { ...sumPrice, expense: sumPrice.expense + transaction.price };
    }
    return { ...sumPrice, income: sumPrice.income + transaction.price };
  }, initTotalPrice);
  return totalPrice;
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

  const totalPrice = sumPricesByType(transactions);
  return { totalPrice };
};

export default {};
