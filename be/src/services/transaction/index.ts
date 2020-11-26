import { TransactionModel, Transaction, AccountModel } from 'models';

export const getTransaction = async () => {
  return TransactionModel.find().populate('category').populate('method');
};

export const saveAndAddToAccount = async (
  transaction: Transaction,
  accountObjId: string,
) => {
  const { _id: transcationObjId } = await TransactionModel.create(transaction);
  return AccountModel.findByPkAndPushTransaction(
    accountObjId,
    transcationObjId,
  );
};
