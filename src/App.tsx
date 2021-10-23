import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import TableContainer from 'components/atoms/table-container';
import TableHeader from 'components/atoms/table-header';
import TableBody from 'components/atoms/table-body';
import Spinner from 'components/atoms/spinner';

const App = () => {
  const { data, loading, error } = useQuery(gql`
    query {
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
  `);
  const searchResults = data?.search?.edges;
  console.log('DATA ', searchResults);
  console.log('LOADING ', loading);
  console.log('ERROR ', error);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <TableContainer cellSpacing="0">
        <TableHeader>
          <tr>
            <th>Name</th>
            <th>Stars</th>
            <th>Forks</th>
          </tr>
        </TableHeader>
        {Array.isArray(searchResults) ? (
          searchResults.length > 0 ? (
            <TableBody>
              {searchResults.map(
                ({ node: { id, name, stargazerCount, forkCount } }) => (
                  <tr key={id}>
                    <th>{name}</th>
                    <th>{stargazerCount}</th>
                    <th>{forkCount}</th>
                  </tr>
                )
              )}
            </TableBody>
          ) : (
            <h2>No Results Found</h2>
          )
        ) : (
          <h2>Oops something went wrong!</h2>
        )}
      </TableContainer>
    </div>
  );
};

export default App;
