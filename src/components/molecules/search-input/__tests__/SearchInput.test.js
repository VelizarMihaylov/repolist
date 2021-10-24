import { render } from '@testing-library/react';

import SearchInput from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('SearchInput Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <SearchInput placeholder="...search" />
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
