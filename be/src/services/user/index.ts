import { AccountModel } from 'models/account';
import { IUserDocument } from 'models/user';

export const titleByAccountId = async (accountId: String) => {
  const account = await AccountModel.findOne(
    { _id: accountId },
    { _id: false, title: true },
  ).exec();

  return account;
};

export const getInvitation = async (user: IUserDocument) => {
  const account = user.invitations?.map((invitation) => invitation.accounts);
  return AccountModel.find({ _id: { $in: account } }).select(
    '_id title ownerName',
  );
};
export default titleByAccountId;
