const models = require('models');

export const titleByAccountId = async (accountId: String) => {
  const account = await models.Account.findOne({
    attributes: ['title'],
    where: {
      id: accountId,
    },
  });

  return account;
};

export const getUserList = async () => {
  const allUserList = await models.User.findAll({});
  return allUserList;
};

export const putUser = async (user: any, startOfWeek: String) => {
  let transaction = null;
  try{
    transaction = await models.sequelize.transaction();
    const result = models.User.update(
      { startOfWeek },
      { where: { id: user.id } },
      { transaction },
    );

    return result;
  } catch (e) {
    return e;
  }
};

// export const getInvitation = async (user: IUserDocument) => {
//   const account: any = user.invitations?.map((invitation) =>
//     AccountModel.findById(invitation.accounts).select(
//       'title _id ownerName imageUrl',
//     ),
//   );
//   const results = await Promise.all(account);
//   return results;
// };

// const filterInvitation = (user: IUserDocument, accountObjId: string) => {
//   const prevInvitaionLength = user.invitations?.length;
//   // eslint-disable-next-line no-param-reassign
//   user.invitations = user.invitations?.filter(
//     (invitation) => String(invitation.accounts) !== accountObjId,
//   );
//   return user.invitations?.length === prevInvitaionLength
//     ? Promise.resolve()
//     : user.save();
// };

// export const denyInvitation = async (
//   user: IUserDocument,
//   accountObjId: string,
// ) => {
//   return filterInvitation(user, accountObjId);
// };

// export const agreeInvitaion = async (
//   user: IUserDocument,
//   accountObjId: string,
// ) => {
//   return Promise.all([
//     filterInvitation(user, accountObjId),
//     AccountModel.update(
//       { _id: accountObjId, 'users._id': { $ne: user._id } },
//       {
//         $addToSet: {
//           users: user,
//         },
//       },
//     ),
//   ]);
// };

export default titleByAccountId;
