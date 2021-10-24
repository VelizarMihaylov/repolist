import gql from 'graphql-tag';

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories(
    $type: SearchType!
    $query: String!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    search(
      type: $type
      query: $query
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            url
            stargazers {
              totalCount
            }
            stargazerCount
            forkCount
          }
        }
      }
    }
  }
`;
