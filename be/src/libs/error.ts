export const invalidTransactionError = {
  status: 400,
  message: '잘못된 Transaction Id이거나, 삭제된 Transaction에 접근하였습니다.',
};

export const accountHasNoUserError = {
  status: 400,
  message: 'account에 등록된 User가 없습니다.',
};

export const unAuthroziedError = {
  status: 401,
  message: '유저 인증이 필요합니다',
};

export const invalidAccessError = {
  status: 403,
  message: '해당 가계부에 접근 권한이 없습니다',
};

export const UserHasNoAccount = {
  status: 400,
  message: 'user가 가지고 있는 account가 없습니다.',
};
