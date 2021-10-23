import { render } from '@testing-library/react';

import TableHeader from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('TableHeader Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <TableHeader>Test Render</TableHeader>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
