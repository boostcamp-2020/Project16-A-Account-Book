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

export const updateUnclassifiedMethod = {
  status: 200,
  error: '수정할 수 없는 항목 입니다',
  success: false,
};

export const UserHasNoAccount = {
  status: 400,
  message: 'user가 가지고 있는 account가 없습니다.',
};
export const invalidCategory = {
  status: 403,
  message: '해당 카테고리에 접근 할 수 없습니다',
};

export const removeUnclassifiedMethod = {
  status: 200,
  error: '제거할 수 없는 항목 입니다',
  success: false,
};

export const invaildMethod = {
  status: 400,
  message: '잘못된 자원으로 접근하였습니다',
};

export const accountNoChange = {
  status: 400,
  message: 'account Update 중 에러가 발생했습니다.',
};

export const invaildTitleLengthTitle = {
  status: 200,
  error: '최대 20자 까지 입력 가능합니다',
  success: false,
};

export const duplicatedValue = {
  status: 200,
  error: '중복된 입력입니다',
  success: false,
};

export const invalidPrice = {
  status: 200,
  error: '가격은 0이상 1조 미만이어야 합니다.',
  success: false,
};
export const invalidForm = {
  status: 200,
  error: '폼이 다 채워지지 않았거나, 폼의 내용이 잘못되었습니다.',
  success: false,
};

export class NotVaildException {
  message: string;

  status: number;

  constructor() {
    this.message = '잘못된 접근 입니다.';
    this.status = 400;
  }
}
