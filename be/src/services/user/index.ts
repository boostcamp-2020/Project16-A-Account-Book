import { AccountModel, IAccountDocument } from 'models/account';
import { IUserDocument, UserModel } from 'models/user';

export const titleByAccountId = async (accountId: String) => {
  const account = await AccountModel.findOne(
    { _id: accountId },
    { _id: false, title: true },
  ).exec();

  return account;
};

export const getInvitation = async (user: IUserDocument) => {
  const account: any = user.invitations?.map((invitation) =>
    AccountModel.findById(invitation.accounts).select('title _id ownerName'),
  );
  const results = await Promise.all(account);
  return results;
};

export const getUserList = async () => {
  const allUserList = await UserModel.find().exec();
  return allUserList;
};

export default titleByAccountId;
