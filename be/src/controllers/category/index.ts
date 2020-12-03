import { Context } from 'koa';
import { getCategories } from 'services/category';
import { getTotalPriceByClassification } from 'services/transaction';

const get = async (ctx: Context) => {
  const { accountObjId } = ctx.params;
  const categorisedType = await getCategories(accountObjId);
  ctx.status = 200;
  ctx.body = categorisedType;
};

const getStatisticsInfo = async (ctx: Context) => {
  const { startDate, endDate } = ctx.query;
  const { accountObjId } = ctx.params;
  const totalPayments = await getTotalPriceByClassification(
    accountObjId,
    startDate,
    endDate,
  );
  ctx.status = 200;
  ctx.body = { totalPayments };
};

export default { getStatisticsInfo, get };
