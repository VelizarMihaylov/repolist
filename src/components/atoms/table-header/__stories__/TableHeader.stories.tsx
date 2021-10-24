import { Meta, Story } from '@storybook/react';

import TableHeader from '..';

import { TableHeaderProps } from '../TableHeader';

export default {
  component: TableHeader,
  title: 'Atom/TableHeader',
  argTypes: {},
} as Meta;

const Template: Story<TableHeaderProps> = (args): React.ReactElement => {
  return <TableHeader {...args} />;
};

export const _default = Template.bind({});

_default.args = {};
