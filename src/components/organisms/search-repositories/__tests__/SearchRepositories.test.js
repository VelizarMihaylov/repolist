import { render } from '@testing-library/react';

import SearchRepositories from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { reposMock } from '../__mocks__';

describe('SearchRepositories Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <SearchRepositories
            placeholder="..search"
            searchResults={reposMock}
          />
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
