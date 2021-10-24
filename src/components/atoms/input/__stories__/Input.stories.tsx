import { Meta, Story } from '@storybook/react';

import Input from '..';

import { InputProps } from '../Input';

export default {
  component: Input,
  title: 'Atom/Input',
  argTypes: {},
} as Meta;

const Template: Story<InputProps> = (args): React.ReactElement => {
  return <Input {...args} />;
};

export const _default = Template.bind({});

_default.args = {
  placeholder: 'Text Input',
  error: true,
};
