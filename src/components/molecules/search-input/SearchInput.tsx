import styled from 'styled-components';

import Input from 'components/atoms/input';
import Button from 'components/atoms/button';

export type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

const StyledSearchInput = styled.div`
  display: flex;
  & input {
    margin-right: ${({ theme }) => theme.pxToRem(16)};
  }
`;

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
  onSearch,
  className,
}) => {
  return (
    <StyledSearchInput className={className}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          if (typeof onChange === 'function') {
            onChange(event);
          }
        }}
      />
      <Button
        onClick={(event) => {
          if (typeof onSearch === 'function') {
            onSearch(event);
          }
        }}
      >
        Search
      </Button>
    </StyledSearchInput>
  );
};

export default SearchInput;
