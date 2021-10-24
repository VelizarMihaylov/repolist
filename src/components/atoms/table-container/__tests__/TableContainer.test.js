import { render } from '@testing-library/react';

import TableContainer from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('TableContainer Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <TableContainer />
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
