import { AccountModel } from 'models/account';

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
