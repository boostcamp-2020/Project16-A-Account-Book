export default {
  transaction: (accountObjId: string) => `/api/${accountObjId}/transactions/`,

  transactionDetail: (transactionObjId: string) =>
    `/api/${transactionObjId}/transactions/detail`,
  github: '/api/auth/github',
  githubAccessToken: '/api/auth/github/access_token?code=',

  userTitle: '/api/user/titleByAccountId?accountId=',
  category: (accountObjId: string) => {
    return `/api/${accountObjId}/categories/`;
  },
  postCategory: '/api/categories',

  account: '/api/accounts',

  method: (accountObjId: string) => `/api/${accountObjId}/methods/`,

  statistics: (accountObjId: string) =>
    `/api/${accountObjId}/categories/statistics/`,

  accountInfo: (owner: string, title: string) =>
    `/api/accounts/info?title=${title}&owner=${owner}`,
};
