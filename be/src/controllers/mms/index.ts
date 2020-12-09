import { Context } from 'koa';
import { postMms } from 'services/mms';

const post = async (ctx: Context) => {
  const { accountObjId, mmsObj } = ctx.request.body;
  try {
    const newMms = await postMms(accountObjId, mmsObj);
    ctx.status = 200;
    ctx.body = newMms;
  } catch (e) {
    ctx.body = { success: false, message: e };
  }
};

export default { post };
