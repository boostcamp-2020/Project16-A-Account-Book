const makeQueryString = (queries: object) => {
  return Object.entries(queries)
    .reduce((queryString: string, query: [string, string]) => {
      const [key, value] = query;
      return `${queryString}${key}=${value}&`;
    }, '?')
    .slice(0, -1);
};

export default makeQueryString;
