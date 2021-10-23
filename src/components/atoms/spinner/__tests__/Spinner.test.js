import { render } from '@testing-library/react';

import Spinner from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('Spinner Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <Spinner>Test Render</Spinner>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
