import { AccountModel } from 'models/account';
import { CategoryModel } from 'models/category';
import { TransactionModel } from 'models/transaction';
import { duplicatedValue } from 'libs/error';

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
const isDuplicated = (existCategory: any, objid?: string) => {
  if (existCategory.categories.length === 0) return false;
  if (String(existCategory.categories[0]._id) === objid) return false;
  return true;
};

export const postCategory = async (
  type: string,
  title: string,
  color: string,
  accountObjId: string,
) => {
  const exist: any = await AccountModel.findDuplicateCategory(
    accountObjId,
    type,
    title,
  );
  if (isDuplicated(exist)) throw duplicatedValue;

  const newCategory = new CategoryModel({
    type,
    title,
    color,
  });
  const updateAccount = AccountModel.update(
    { _id: accountObjId },
    { $push: { categories: newCategory._id } },
  );
  return Promise.all([newCategory.save(), updateAccount]);
};

export const updateCategory = async (
  objId: string,
  type: string,
  title: string,
  color: string,
  accountObjId: string,
) => {
  const exist: any = await AccountModel.findDuplicateCategory(
    accountObjId,
    type,
    title,
  );
  if (isDuplicated(exist, objId)) throw duplicatedValue;

  return CategoryModel.update({ _id: objId }, { $set: { type, title, color } });
};

export const deleteOneCategory = async (
  accountObjId: string,
  objId: string,
) => {
  const unclassifiedCategory = await AccountModel.findUnclassifiedCategory(
    accountObjId,
  );

  return Promise.all([
    TransactionModel.updateMany(
      { category: objId },
      { category: unclassifiedCategory },
    ).exec(),
    CategoryModel.deleteOne({ _id: objId }),
  ]);
};

export default {};
