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

  userTitle: '/api/user/titleByAccountId?accountId=',
  category: (accountObjId: string) => {
    return `/api/${accountObjId}/categories/`;
  },
  defaultCategory: 'api/categories',
  account: '/api/accounts',

  method: (accountObjId: string) => `/api/${accountObjId}/methods/`,
  methodDeleteOrUpdate: (accountObjId: string, methodObjId: string) =>
    `/api/${accountObjId}/methods/${methodObjId}`,

  statistics: (accountObjId: string) =>
    `/api/${accountObjId}/categories/statistics/`,
  categories: (accountObjId: string) => `/api/${accountObjId}/categories`,
  accountInfo: (owner: string, title: string) =>
    `/api/accounts/info?title=${title}&owner=${owner}`,
  deleteCategory: (accountObjId: string, categoryObjId: string) =>
    `/api/${accountObjId}/categories/${categoryObjId}`,

  getUserInvitation: () => `/api/user/accounts`,
};
