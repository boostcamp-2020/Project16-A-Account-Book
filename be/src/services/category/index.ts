import { duplicatedValue } from 'libs/error';

const models = require('models');

export const getCategoryById = async(id: number) => {
  const category = await models.Category.findOne({
    where:{
      id
    }
  });
  return category;
}

export const getCategories = async (accountObjId: string) => {
  const res = await models.Category.findAll({
    where: {
      accountId: accountObjId,
    },
  });
  const categorisedType = await res?.reduce((acc: any, cur: any) => {
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
  const duple = await models.Category.findOne({
    where: {
      accountId: accountObjId,
      type,
      title,
    },
  });
  if (duple) {
    throw duplicatedValue;
  }
  return models.Category.create({
    type,
    title,
    color,
    accountId: accountObjId,
  });
};

export const updateCategory = async (
  objId: string,
  type: string,
  title: string,
  color: string,
  accountObjId: string,
) => {
  const duple = await models.Category.findOne({
    where: {
      accountId: accountObjId,
      type,
      title,
    },
  });
  if (duple) {
    throw duplicatedValue;
  }
  return models.Category.update(
    { type, title, color, accountId: accountObjId },
    { where: { id: objId } },
  );
};

export const deleteOneCategory = async (
  accountObjId: string,
  objId: string,
) => {
  const unclassifiedCategory = await models.Category.findOne({
    where: {
      accountId: accountObjId,
    },
  });

  await models.Transaction.update(
    { categoryId: unclassifiedCategory.id },
    { where: { categoryId: objId } },
  );
  return models.Category.destroy({ where: { id: objId } });
};

export default {};
