import { render } from '@testing-library/react';

import SearchRepositories from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('SearchRepositories Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <SearchRepositories>Test Render</SearchRepositories>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
