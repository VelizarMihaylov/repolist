import { render } from '@testing-library/react';

import Link from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('Link Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <Link href="#">Test Render</Link>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
