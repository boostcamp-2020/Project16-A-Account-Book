import * as categorySeed from './category';
import * as methodSeed from './method';
import * as UserSeed from './user';
import * as transactionSeed from './transaction';
import { AccountModel } from '../models';

const REPEAT_LENGTH = 5;
const TRANSACTION_LENGTH = 30;
const METHOD_LENGTH = 3;

export const totalSeed = async () => {
  const [, methods, categories] = await Promise.all([
    UserSeed.up(),
    methodSeed.up(),
    categorySeed.up(),
  ]);
  const transactions = await transactionSeed.up({ methods, categories });
  const accounts = Array(REPEAT_LENGTH)
    .fill(0)
    .reduce((acc, cur, idx) => {
      const transactionBase = idx * TRANSACTION_LENGTH;
      const methodBase = idx * METHOD_LENGTH;
      acc.push({
        transactions: transactions.slice(
          transactionBase,
          transactionBase + TRANSACTION_LENGTH,
        ),
        methods: methods.slice(methodBase, methodBase + METHOD_LENGTH),
        categories: categories.slice(methodBase, methodBase + METHOD_LENGTH),
      });
      return acc;
    }, []);
  await AccountModel.create(accounts);
};

export default {};
