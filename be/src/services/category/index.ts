import { AccountModel } from 'models/account';
import { CategoryModel } from 'models/category';

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

export const postCategory = async (
  type: string,
  title: string,
  color: string,
  accountObjId: string,
) => {
  const res = await CategoryModel.findOne({ title });
  if (res != null) {
    return { success: false, error: '중복된 타이틀 존재' };
  }
  const newCategory = new CategoryModel({
    type,
    title,
    color,
  });
  await newCategory.save();
  await AccountModel.update(
    { _id: accountObjId },
    { $push: { categories: newCategory._id } },
  );
  return { success: true, newCategory };
};

export default {};
