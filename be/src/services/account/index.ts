import transaction from 'controllers/transaction';
import {
  UserHasNoAccount,
  accountNoChange,
  NotVaildException,
} from 'libs/error';
import { createDefaultCategory, createDefaultMethod } from 'services/auth';

const models = require('models');

export const getAccountsByUserId = async (userId: string) => {
  const res = await models.Account.findAll({ 
    include: {
      model: models.User,
      where: {
        id: userId
      }
    }
  });

  if (!res) throw UserHasNoAccount;
  return res;
};

export const getAccountByTitleAndOwner = async (
  title: string,
  ownerName: string,
) => {
  const account = await models.Account.findOne({ where: { title, ownerName } });

  if (!account) throw new NotVaildException();
  return account;
};

// const inviteUserList = (
//   host: String,
//   accountObjId: string,
//   userObjIdList: string[],
// ) => {
//   return UserModel.updateMany(
//     {
//            하나라도 있으면
//       _id: { $in: userObjIdList },
//                                 없으면
//       'invitations.accounts': { $ne: accountObjId },
//     },
//     {
//       없으면 추가
//       $addToSet: {
//         invitations: {
//           host,
//           accounts: accountObjId,
//         },
//       },
//     },
//   );
// };

export const createNewAccount = async (user: any, title: any) => {
  let transaction: any = null;
  try{
    

    const newAccount = await models.Account.create({
      title,
      ownerName: user.nickName,
    });

    const accountUser = await models.User.findOne({where:{id:user.id}})

    await accountUser.addAccount(newAccount);
    await createDefaultCategory(newAccount.id);
    await createDefaultMethod(newAccount.id);

    // const inviteUsers = inviteUserList(
    //   user.nickname,
    //   newAccount._id,
    //   userObjIdList,
    // );
    return newAccount;
  } catch (e) {
    if (transaction != null){
      await transaction.rollback();
    }
  }
};

export const updateAccountByUserAndAccountInfo = async (
  title: any,
  accountObjId: string,
) => {
  return models.Account.update({ title }, { where: { id: accountObjId } });
};

export const deleteAccountByAccountInfo = async (accountObjId: String) => {
  const deleteAccount = await models.Account.destroy({
    where: { id: accountObjId },
  });

  if (!deleteAccount) {
    throw accountNoChange;
  }
};

export const addUserInAccount = async (
  accountObjId: string,
  userObjId: string,
) => {
  const account = await models.Account.findOne({ where: { id: accountObjId } });
  const result = await models.User.addAccount(account, {
    through: 'User_Account',
  });

  return { success: true, message: result };
};

export const deleteUserInAccount = async (
  accountObjId: string,
  userObjId: string,
) => {
  return models.User_Account.destroy({
    where: { userId: userObjId, accountId: accountObjId },
  });
};

export default {};
