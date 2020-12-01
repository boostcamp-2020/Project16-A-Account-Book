import Router from 'koa-router';
import {AccountModel} from '../../../models/account';
import {TransactionModel} from '../../../models/transaction';

const router = new Router(); 

router.get('/:accountObjId', async (ctx)=>{
  // 
  const {accountObjId} = ctx.params;
  const res = await  AccountModel.find().populate({path:'categories'}).exec();
  console.log(res);
  // const t = await TransactionModel.find().populate('categories').exec();
  // console.log(t);
  
  ctx.body =res
})

export default router;