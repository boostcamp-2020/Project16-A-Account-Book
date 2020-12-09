import { AccountModel } from 'models/account';
import { MethodModel } from 'models/method';
import { TransactionModel } from 'models/transaction';
import { removeUnclassifiedMethod } from 'libs/error';

export const getMethods = async (accountObjId: string) => {
  const res = await AccountModel.findOne(
    { _id: accountObjId },
    { methods: true, _id: false },
  )
    .populate('methods')
    .exec();
  return res?.methods;
};

export const createMethod = async (accountObjId: string, title: string) => {
  const method = new MethodModel({
    title,
  });
  method.save();
  return AccountModel.findByIdAndUpdate(accountObjId, {
    $push: { methods: method._id },
  });
};

export const removeMethod = async (
  accountObjId: string,
  methodObjId: string,
) => {
  const unclassifiedMethod = await AccountModel.findUnclassifiedMethod(
    accountObjId,
  );
  if (String(unclassifiedMethod) === methodObjId)
    throw removeUnclassifiedMethod;
  return Promise.all([
    TransactionModel.updateMany(
      { method: methodObjId },
      { method: unclassifiedMethod },
    ).exec(),
    MethodModel.deleteOne({ _id: methodObjId }),
  ]);
};

export const updateMethod = async (methodObjId: string, title: string) => {
  return MethodModel.updateOne({ _id: methodObjId }, { title });
};
