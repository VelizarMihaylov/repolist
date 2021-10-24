import { Meta, Story } from '@storybook/react';

import TableBody from '..';

import { TableBodyProps } from '../TableBody';

export default {
  component: TableBody,
  title: 'Atom/TableBody',
  argTypes: {},
} as Meta;

const Template: Story<TableBodyProps> = (args): React.ReactElement => {
  return <TableBody {...args} />;
};

export const _default = Template.bind({});

_default.args = {};
