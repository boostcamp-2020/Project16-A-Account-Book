import {AccountModel} from 'models/account';

export const getMethods = async (accountObjId : string)  =>{
  const res = await AccountModel.findOne({_id:accountObjId},{methods: true,_id:false}).populate('methods').exec();
  return res?.methods;
}
export default {};