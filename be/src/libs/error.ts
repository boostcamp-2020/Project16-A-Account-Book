export const invalidTransactionError = {
  status: 400,
  message: '잘못된 Transaction Id이거나, 삭제된 Transaction에 접근하였습니다.',
};
export const unAuthroziedError = {
  status: 401,
  message: '유저 인증이 필요합니다',
};
