import { render } from '@testing-library/react';

import TableBody from '..';

import { ThemeProvider } from 'styled-components';
import theme from 'theme';

describe('TableBody Component', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <table>
            <TableBody>
              <tr>
                <td>Column One Content</td>
                <td>Column Two Content</td>
              </tr>
            </TableBody>
          </table>
        </ThemeProvider>
      );
    }).not.toThrow();
  });
});
