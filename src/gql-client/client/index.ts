import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const graphqlEndpoint =
  process.env.REACT_APP_GRAPHQL_ENDPOINT || 'https://api.github.com';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_ACCESS_TOKEN}3123`,
    },
  };
});

const httpLink = createHttpLink({
  uri: `${graphqlEndpoint}/graphql`,
});

export const client = new ApolloClient({
  ssrMode: false,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
