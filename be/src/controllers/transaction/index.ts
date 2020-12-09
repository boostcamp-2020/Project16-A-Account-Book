import Koa from 'koa';
import { invalidTransactionError } from 'libs/error';
import * as service from 'services/transaction';

const getTransactionList = async (ctx: Koa.Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const transactionList = await service.getTransactionList({
    startDate,
    endDate,
    accountObjId,
  });
  const groupedByDateTransactionList = service.sortAndGroupByDate(
    transactionList,
  );
  ctx.status = transactionList.length === 0 ? 204 : 200;
  ctx.body = groupedByDateTransactionList;
};

const getTransaction = async (ctx: Koa.Context) => {
  const { transactionObjId } = ctx.params;
  try {
    const transaction = await service.getTransaction(transactionObjId);
    ctx.status = 200;
    ctx.body = transaction;
  } catch (e) {
    throw invalidTransactionError;
  }
};

const post = async (ctx: Koa.Context) => {
  const { transaction } = ctx.request.body;
  const { accountObjId } = ctx.params;
  try {
    await service.saveAndAddToAccount(transaction, accountObjId);
  } catch (e) {
    e.status = 400;
    throw e;
  }
  ctx.status = 201;
  ctx.res.end();
};

const updateTransaction = async (ctx: Koa.Context) => {
  const { transaction } = ctx.request.body;
  const { transactionObjId } = ctx.params;
  try {
    await service.updateTransaction(transactionObjId, transaction);
    ctx.status = 200;
    ctx.res.end();
  } catch (e) {
    throw invalidTransactionError;
  }
};

const deleteTransaction = async (ctx: Koa.Context) => {
  const { transactionObjId } = ctx.params;
  try {
    await service.deleteTransaction(transactionObjId);
    ctx.status = 200;
    ctx.res.end();
  } catch (e) {
    throw invalidTransactionError;
  }
};

export default {
  deleteTransaction,
  getTransactionList,
  post,
  getTransaction,
  updateTransaction,
};
