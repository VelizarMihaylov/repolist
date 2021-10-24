import styled from 'styled-components';

import Spinner from 'components/atoms/spinner';
import SearchInput from 'components/molecules/search-input';
import GitRepoList from 'components/molecules/git-repo-list';
import { GitRepoListProps } from 'components/molecules/git-repo-list/GitRepoList';

export type SearchRepositoriesProps = {
  children?: React.ReactNode;
  loading?: boolean;
  value?: string;
  searchResults: GitRepoListProps['repos'];
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledSearchRepositories = styled.div`
  max-width: ${({ theme }) => theme.pxToRem(960)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .search-input {
    margin-bottom: ${({ theme }) => theme.pxToRem(24)};
  }
`;

const SearchRepositories: React.FC<SearchRepositoriesProps> = ({
  loading,
  value,
  searchResults,
  onChange,
  onSearch,
  placeholder,
}) => {
  return (
    <StyledSearchRepositories>
      <SearchInput
        placeholder={placeholder}
        className="search-input"
        value={value}
        onChange={(event) => {
          if (typeof onChange === 'function') {
            onChange(event);
          }
        }}
        onSearch={(event) => {
          if (typeof onSearch === 'function') {
            onSearch(event);
          }
        }}
      />
      {loading ? (
        <Spinner />
      ) : searchResults.length > 0 ? (
        <GitRepoList repos={searchResults} />
      ) : (
        <h2>No results found</h2>
      )}
    </StyledSearchRepositories>
  );
};

export default SearchRepositories;
