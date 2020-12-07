export default {
  transaction: (accountObjId: string) => `/api/transactions/${accountObjId}`,
  github: '/api/auth/github',
  githubAccessToken: '/api/auth/github/access_token?code=',
  userTitle: '/api/user/titleByAccountId?accountId=',
  category: (accountObjId: string) => {
    return `/api/categories/${accountObjId}`;
  },
  postCategory: 'api/categories',
  account: '/api/accounts',
  method: (accountObjId: string) => `/api/methods/${accountObjId}`,
  statistics: (accountObjId: string) =>
    `/api/categories/statistics/${accountObjId}`,
  accountInfo: (owner: string, title: string) =>
    `/api/accounts/info?title=${title}&owner=${owner}`,
};
