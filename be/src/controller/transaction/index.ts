import Koa from 'koa';
import { TransactionModel } from 'models/transaction';

const get = async (ctx: Koa.Context) => {
  const res = await TransactionModel.find()
    .populate('category')
    .populate('method');
  ctx.body = res;
};

const post = async (ctx: Koa.Context) => {
  const {
    client,
    classification,
    date,
    memo,
    method,
    category,
    excludeFromBudget,
    price,
  } = ctx.request.body;

  const newTransaction = new TransactionModel({
    client,
    date,
    classification,
    category,
    memo,
    method,
    excludeFromBudget,
    price,
  });

  try {
    await newTransaction.save();
    ctx.status = 201;
    ctx.res.end();
    return;
  } catch (err) {
    console.error(err);
    ctx.status = 500;
    ctx.res.end();
  }
};

export default { get, post };
