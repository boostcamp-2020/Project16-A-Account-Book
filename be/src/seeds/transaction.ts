/* eslint-disable no-underscore-dangle */
import { randomNumber, randomDate, randomLengthString } from '../libs/random';

import { TransactionModel, Transaction } from '../models';

const REPEAT_LENGTH = 5;
const TRANSACTION_LENGTH = 30;
const METHOD_LENGTH = 3;

interface TransactionType {
  methods: any;
  categories: any;
}

export const up = ({ methods, categories }: TransactionType) => {
  return new Promise<[Transaction]>((resolve: any) => {
    const transactions = Array(REPEAT_LENGTH * TRANSACTION_LENGTH)
      .fill(0)
      .reduce((transactionList, cur, index) => {
        const base = Math.floor(index / TRANSACTION_LENGTH) * METHOD_LENGTH;
        const client = randomLengthString({ minLength: 1, maxLength: 20 });
        const date = randomDate();
        const memo = randomLengthString({});
        const methodPosition =
          (randomNumber({ start: 0, end: 100 }) % METHOD_LENGTH) + base;
        const method = methods[methodPosition]._id;
        const categoryPosition =
          (randomNumber({ start: 0, end: 100 }) % METHOD_LENGTH) + base;
        const category = categories[categoryPosition]._id;
        transactionList.push({
          client,
          date,
          memo,
          method,
          category,
        });
        return transactionList;
      }, []);
    TransactionModel.create(transactions).then((ts: Transaction) =>
      resolve(ts),
    );
  });
};

export const down = async () => {
  await TransactionModel.deleteMany({});
};
