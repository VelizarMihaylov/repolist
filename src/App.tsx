import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import PageContainer from 'components/template/page-container';
import SearchRepositories from 'components/organisms/search-repositories';

import {
  SearchResultItemConnection,
  QuerySearchArgs,
  Repository,
  SearchType,
  SEARCH_REPOSITORIES,
} from 'gql-client';

import { useQueryParams } from 'hooks';

const App = () => {
  const params = useQueryParams();
  const [searchValue, setSearchValue] = useState(
    params.get('searchValue') || 'react'
  );
  const [query, setQuery] = useState(searchValue);
  const { data, loading, error } = useQuery<
    {
      search: SearchResultItemConnection;
    },
    QuerySearchArgs
  >(SEARCH_REPOSITORIES, {
    variables: {
      first: 20,
      query,
      type: SearchType.Repository,
    },
  });

  useEffect(() => {
    window.history.replaceState(null, '', `?searchValue=${query}`);
  }, [query]);

  const searchResults =
    data && Array.isArray(data?.search?.edges)
      ? data.search.edges.map((item) => {
          const node = item?.node as Repository;
          return {
            id: node?.id,
            name: node?.name,
            url: node?.url,
            stargazerCount: node?.stargazerCount,
            forkCount: node?.forkCount,
          };
        })
      : [];

  if (error) {
    throw new Error(JSON.stringify(error));
  }

  return (
    <PageContainer title="GitHub Repo List">
      <SearchRepositories
        loading={loading}
        placeholder="search"
        value={searchValue}
        searchResults={searchResults}
        onChange={(event) => {
          const value = event.target.value;
          setSearchValue(value);
        }}
        onSearch={() => {
          if (searchValue.length > 0 && searchValue !== query) {
            setQuery(searchValue);
          }
        }}
      />
    </PageContainer>
  );
};

export default App;
