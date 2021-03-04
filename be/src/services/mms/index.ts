const models = require('models');

export interface ParsedSMS {
  cardname: string;
  amount: number;
  date: string;
  time: string;
  transactionType: string;
  cardType: string;
  isDeposit: Boolean;
}

export const postMms = async (
  accountObjId: string,
  mmsObj: ParsedSMS,
  client: string,
) => {
  let method = await models.Method.findOne({
    where: {
      accountId: accountObjId,
      title: mmsObj.cardname,
    },
  });
  if (!method) {
    method = await models.Method.create({
      title: mmsObj.cardname,
      accountId: accountObjId,
    });
  } else [method] = method;

  const unclassified = await models.Category.findOne({
    attributes: ['id'],
    where: { accountId: accountObjId, title: '미분류' },
  });
  if (unclassified != null) {
    await models.Transaction.create({
      client,
      methodId: method._id,
      categoryId: unclassified.id,
      accountId: accountObjId,
      date: new Date(`${mmsObj.date} ${mmsObj.time}`),
      price: mmsObj.amount,
      memo: '문자로 추가',
      excludeFromBudget: false,
      isDeleted: false,
    });
    return { success: true };
  }
  return { success: false, error: '미분류 카테고리가 존재하지 않습니다' };
};

export default {};
