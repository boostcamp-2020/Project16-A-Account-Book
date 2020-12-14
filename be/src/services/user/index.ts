import { UserModel, IUserDocument } from 'models/user';
import { AccountModel } from 'models/account';

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
      'title _id ownerName imageUrl',
    ),
  );
  const results = await Promise.all(account);
  return results;
};

export const denyInvitation = async (
  user: IUserDocument,
  accountObjId: string,
) => {
  const prevInvitaionLength = user.invitations?.length;
  // eslint-disable-next-line no-param-reassign
  user.invitations = user.invitations?.filter(
    (invitation) => String(invitation.accounts) !== accountObjId,
  );
  if (user.invitations?.length === prevInvitaionLength)
    return Promise.resolve();
  return user.save();
};
export default titleByAccountId;
