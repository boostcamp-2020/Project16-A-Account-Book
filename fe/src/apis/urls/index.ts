export default {
  transaction: (accountObjId: string) => `/api/transactions/${accountObjId}`,
  github: '/api/auth/github',
  githubAccessToken: '/api/auth/github/access_token?code=',
  userTitle: '/api/user/titleByAccountId?accountId=',
  category: (accountObjId: string) => {
    return `/api/categories/${accountObjId}`;
  },
};
