import { render } from '@testing-library/react';

import PageContainer from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('PageContainer Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <PageContainer>Test Render</PageContainer>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
