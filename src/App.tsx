import { useQuery } from '@apollo/client';

import TableContainer from 'components/atoms/table-container';
import TableHeader from 'components/atoms/table-header';
import TableBody from 'components/atoms/table-body';
import Spinner from 'components/atoms/spinner';

import {
  SearchResultItemConnection,
  Repository,
  QuerySearchArgs,
  SearchType,
  SEARCH_REPOSITORIES,
} from 'gql-client';

const App = () => {
  const { data, loading, error } = useQuery<
    {
      search: SearchResultItemConnection;
    },
    QuerySearchArgs
  >(SEARCH_REPOSITORIES, {
    variables: {
      first: 100,
      query: 'react',
      type: SearchType.Repository,
    },
  });

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
              {searchResults.map((item) => {
                const node = item?.node as Repository;
                return node ? (
                  <tr key={node?.id}>
                    <td>{node.name}</td>
                    <td>{node.stargazerCount}</td>
                    <td>{node.forkCount}</td>
                  </tr>
                ) : null;
              })}
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
