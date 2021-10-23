import { render } from '@testing-library/react';

import TableBody from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('TableBody Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <TableBody>Test Render</TableBody>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
