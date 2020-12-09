import { AccountModel } from 'models/account';
import { MethodModel } from 'models/method';

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
