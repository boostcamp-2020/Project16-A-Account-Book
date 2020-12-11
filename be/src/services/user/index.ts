import { UserModel, IUserDocument } from 'models/user';
import { AccountModel, IAccountDocument } from 'models/account';

export const titleByAccountId = async (accountId: String) => {
  const account = await AccountModel.findOne(
    { _id: accountId },
    { _id: false, title: true },
  ).exec();

  return account;
};

export const getUserList = async () => {
  const allUserList = await UserModel.find({}).exec();
  return allUserList;
};
export const getInvitation = async (user: IUserDocument) => {
  const account: any = user.invitations?.map((invitation) =>
    AccountModel.findById(invitation.accounts).select(
      'title _id ownerName accountProfile',
    ),
  );
  const results = await Promise.all(account);
  return results;
};

export default titleByAccountId;
