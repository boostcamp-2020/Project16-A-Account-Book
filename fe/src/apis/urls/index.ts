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
  user: `/api/users`,
  userInfo: `/api/users/userInfo`,
  userTitle: '/api/users/titleByAccountId?accountId=',
  category: (accountObjId: string) => {
    return `/api/${accountObjId}/categories/`;
  },
  defaultCategory: 'api/categories',
  account: '/api/accounts',
  postCategory: '/api/categories',
  method: (accountObjId: string) => `/api/${accountObjId}/methods/`,
  methodDeleteOrUpdate: (accountObjId: string, methodObjId: string) =>
    `/api/${accountObjId}/methods/${methodObjId}`,

  statistics: (accountObjId: string) =>
    `/api/${accountObjId}/categories/statistics/`,
  categories: (accountObjId: string) => `/api/${accountObjId}/categories`,
  accountUpdate: (accountObjId: string) => `/api/${accountObjId}/accounts`,
  accountInfo: (owner: string, title: string) =>
    `/api/accounts/info?title=${title}&owner=${owner}`,
  mms: '/api/mms',
  deleteCategory: (accountObjId: string, categoryObjId: string) =>
    `/api/${accountObjId}/categories/${categoryObjId}`,

  getUserInvitation: () => `/api/users/accounts`,
};
