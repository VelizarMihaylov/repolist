import { Meta, Story } from '@storybook/react';

import TableBody from '..';
import TableContainer from 'components/atoms/table-container';

import { TableBodyProps } from '../TableBody';

export default {
  component: TableBody,
  title: 'Atom/TableBody',
  argTypes: {},
} as Meta;

const Template: Story<TableBodyProps> = (): React.ReactElement => {
  return (
    <TableContainer>
      <TableBody>
        <tr>
          <td>Column One</td>
          <td>Column Two</td>
        </tr>
      </TableBody>
    </TableContainer>
  );
};

export const _default = Template.bind({});

_default.args = {};
