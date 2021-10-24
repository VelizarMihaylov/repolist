import { render } from '@testing-library/react';

import Input from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('Input Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <Input placeholder="Test input field" />
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
