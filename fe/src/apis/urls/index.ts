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
  postCategory: '/api/categories',

  method: (accountObjId: string) => `/api/${accountObjId}/methods/`,

  statistics: (accountObjId: string) =>
    `/api/${accountObjId}/categories/statistics/`,
  account: '/api/accounts',
  accountUpdate: (accountObjId: string) => `/api/${accountObjId}/accounts`,
  accountInfo: (owner: string, title: string) =>
    `/api/accounts/info?title=${title}&owner=${owner}`,
};
