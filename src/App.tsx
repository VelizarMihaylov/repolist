import { useQuery } from '@apollo/client';

import Spinner from 'components/atoms/spinner';
import GitRepoList from 'components/molecules/git-repo-list';

import {
  SearchResultItemConnection,
  QuerySearchArgs,
  Repository,
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
  console.log('LOADING ', loading);
  console.log('ERROR ', error);

  if (loading) {
    return <Spinner />;
  }

  const searchResults =
    data && Array.isArray(data?.search?.edges)
      ? data.search.edges.map((item) => {
          const node = item?.node as Repository;
          return {
            id: node.id,
            name: node.name,
            url: node.url,
            stargazerCount: node.stargazerCount,
            forkCount: node.forkCount,
          };
        })
      : [];

  return (
    <div>
      {searchResults.length > 0 ? (
        <GitRepoList repos={searchResults} />
      ) : (
        <h2>No results found</h2>
      )}
    </div>
  );
};

export default App;
