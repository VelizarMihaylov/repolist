import { Meta, Story } from '@storybook/react';

import TableContainer from '..';

import { TableContainerProps } from '../TableContainer';

import TableHeader from 'components/atoms/table-header';
import TableBody from 'components/atoms/table-body';

export default {
  component: TableContainer,
  title: 'Atom/TableContainer',
  argTypes: {},
} as Meta;

const Template: Story<TableContainerProps> = (): React.ReactElement => {
  return (
    <div>
      <TableContainer cellSpacing="0">
        <TableHeader>
          <tr>
            <th>Column One</th>
            <th>Column Two</th>
          </tr>
        </TableHeader>
        <TableBody>
          <tr>
            <td>Column One Content</td>
            <td>Column Two Content</td>
          </tr>
        </TableBody>
      </TableContainer>
    </div>
  );
};

export const _default = Template.bind({});

_default.args = {};
