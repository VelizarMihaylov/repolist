import gql from 'graphql-tag';

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories {
    search(type: REPOSITORY, query: "react", first: 100) {
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
