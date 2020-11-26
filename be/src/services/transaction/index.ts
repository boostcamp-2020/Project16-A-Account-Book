import { TransactionModel, Transaction } from '../../models/transaction';

export const getTransaction = async () => {
  return TransactionModel.find().populate('category').populate('method');
};

export const createTransaction = async ({
  client,
  classification,
  date,
  memo,
  method,
  price,
  category,
  excludeFromBudget,
}: Transaction) => {
  const newTransaction = new TransactionModel({
    client,
    classification,
    date,
    memo,
    method,
    category,
    price,
    excludeFromBudget,
  });
  return newTransaction.save();
};

export default {};
