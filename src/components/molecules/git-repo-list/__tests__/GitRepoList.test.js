import { render } from '@testing-library/react';

import GitRepoList from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import { reposMock } from '../__mocks__';

describe('GitRepoList Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <GitRepoList repos={reposMock} />
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
