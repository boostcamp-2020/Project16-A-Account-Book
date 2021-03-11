import { removeUnclassifiedMethod } from 'libs/error';

const models = require('models');

export const getMethods = async (accountObjId: string) => {
  const res = await models.Method.findAll({
    where: {
      accountId: accountObjId,
    },
  });
  return res;
};

export const createMethod = async (accountObjId: string, title: string) => {
  return models.Method.create({ title, accountId: accountObjId });
};

export const removeMethod = async (
  accountObjId: string,
  methodObjId: string,
) => {
  const unclassifiedMethod = await models.Method.findOne({
    where: {
      accountId: Number(accountObjId),
      title: '미분류',
    },
  });
  if (String(unclassifiedMethod.id) === methodObjId)
    throw removeUnclassifiedMethod;
  
  await models.Transaction.update(
    { methodId: unclassifiedMethod.id },
    {
      where: {
        accountId: accountObjId,
      },
    },
  );
  
  return models.Method.destroy({where:{id: methodObjId}});
};

export const updateMethod = async (methodObjId: string, title: string) => {
  return models.Method.update({ title }, { where: { id: methodObjId } });
};
