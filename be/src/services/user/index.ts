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

const filterInvitation = (user: IUserDocument, accountObjId: string) => {
  const prevInvitaionLength = user.invitations?.length;
  // eslint-disable-next-line no-param-reassign
  user.invitations = user.invitations?.filter(
    (invitation) => String(invitation.accounts) !== accountObjId,
  );
  return user.invitations?.length === prevInvitaionLength
    ? Promise.resolve()
    : user.save();
};

export const denyInvitation = async (
  user: IUserDocument,
  accountObjId: string,
) => {
  return filterInvitation(user, accountObjId);
};

export const agreeInvitaion = async (
  user: IUserDocument,
  accountObjId: string,
) => {
  return Promise.all([
    filterInvitation(user, accountObjId),
    AccountModel.update(
      { _id: accountObjId, 'users._id': { $ne: user._id } },
      {
        $addToSet: {
          users: user,
        },
      },
    ),
  ]);
};

export default titleByAccountId;
