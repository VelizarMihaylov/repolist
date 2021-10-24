import { Meta, Story } from '@storybook/react';

import TableHeader from '..';
import TableContainer from 'components/atoms/table-container';

import { TableHeaderProps } from '../TableHeader';

export default {
  component: TableHeader,
  title: 'Atom/TableHeader',
  argTypes: {},
} as Meta;

const Template: Story<TableHeaderProps> = (): React.ReactElement => {
  return (
    <TableContainer>
      <TableHeader>
        <tr>
          <th>Column One</th>
          <th>Column Two</th>
        </tr>
      </TableHeader>
    </TableContainer>
  );
};

export const _default = Template.bind({});

_default.args = {};
