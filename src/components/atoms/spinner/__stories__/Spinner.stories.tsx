import { Meta, Story } from '@storybook/react';

import Spinner from '..';

export default {
  component: Spinner,
  title: 'Atom/Spinner',
  argTypes: {},
} as Meta;

const Template: Story = (): React.ReactElement => {
  return <Spinner />;
};

export const _default = Template.bind({});

_default.args = {};
