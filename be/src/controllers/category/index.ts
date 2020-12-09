import { Context } from 'koa';
import {
  getCategories,
  postCategory,
  getCategoryStatistics,
  updateCategory,
  deleteOneCategory,
} from 'services/category';

const get = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const categorisedType = await getCategories(accountObjId);
  ctx.status = 200;
  ctx.body = categorisedType;
};

const getStatisticsInfo = async (ctx: Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const statistics = await getCategoryStatistics(
    accountObjId,
    startDate,
    endDate,
  );
  ctx.body = statistics;
};

const post = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const { type, title, color } = ctx.request.body;
  const res = await postCategory(type, title, color, accountObjId);
  ctx.status = res.success ? 201 : 200;
  ctx.body = res;
};

const put = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const { objId, type, title, color } = ctx.request.body;
  const res = await updateCategory(objId, type, title, color, accountObjId);
  ctx.status = res.success ? 201 : 200;
  ctx.body = res;
};

const deleteCategory = async (ctx: Context) => {
  const { accountObjId, category } = ctx.params;
  await deleteOneCategory(accountObjId, category);
  ctx.status = 204;
  ctx.res.end();
};

export default { getStatisticsInfo, get, post, put, deleteCategory };
