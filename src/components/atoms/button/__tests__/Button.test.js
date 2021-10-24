import { render } from '@testing-library/react';

import Button from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('Button Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <Button>Test Render</Button>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
