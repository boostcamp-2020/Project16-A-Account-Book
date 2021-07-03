export default {
  transaction: (accountObjId: string) => `/api/${accountObjId}/transactions/`,
  transactionUpdate: (accountObjId: string, transactionObjid: string) =>
    `/api/${accountObjId}/transactions/update/${transactionObjid}`,
  transactionDelete: (accountObjId: string, transactionObjid: string) =>
    `/api/${accountObjId}/transactions/${transactionObjid}`,
  transactionDetail: (accountObjId: string, transactionObjId: string) =>
    `/api/${accountObjId}/transactions/detail/${transactionObjId}`,
  github: '/api/auth/github',
  githubAccessToken: '/api/auth/github/access_token?code=',
  facebook: '/api/auth/facebook',
  facebookAccessToken: '/api/auth/facebook/access_token?code=',
  user: `/api/users`,
  userInfo: `/api/users/userInfo`,
  userTitle: '/api/users/titleByAccountId?accountId=',
  category: (accountObjId: string) => {
    return `/api/${accountObjId}/categories/`;
  },
  oneCategory: (accountObjId: number, categoryId: number) => {
    return `/api/${accountObjId}/categories/one/${categoryId}`;
  },
  defaultCategory: 'api/categories',
  account: '/api/accounts',
  postCategory: '/api/categories',
  method: (accountObjId: string) => `/api/${accountObjId}/methods/`,
  methodDeleteOrUpdate: (accountObjId: string, methodObjId: string) =>
    `/api/${accountObjId}/methods/${methodObjId}`,

  categories: (accountObjId: string) => `/api/${accountObjId}/categories`,
  accountUpdate: (accountObjId: string) => `/api/${accountObjId}/accounts`,
  accountInfo: (owner: string, title: string) =>
    `/api/accounts/info?title=${title}&owner=${owner}`,
  deleteAccountUser: (accountObjId: string) =>
    `/api/${accountObjId}/accounts/user`,

  mms: '/api/mms',
  deleteCategory: (accountObjId: string, categoryObjId: string) =>
    `/api/${accountObjId}/categories/${categoryObjId}`,

  getUserInvitation: () => `/api/users/accounts`,
  postAndDeleteInvitation: (accountObjId: string) =>
    `/api/users/accounts/${accountObjId}`,
};
