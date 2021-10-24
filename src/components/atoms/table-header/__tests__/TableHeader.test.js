import { render } from '@testing-library/react';

import TableHeader from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('TableHeader Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <table>
            <TableHeader>
              <tr>
                <th>Column One</th>
                <th>Column Two</th>
              </tr>
            </TableHeader>
          </table>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
