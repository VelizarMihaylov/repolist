import { Story, Meta } from '@storybook/react';

import Button from '..';

import { ButtonProps } from '../Button';

export default {
  component: Button,
  title: 'Atom/Button',
  argTypes: {
    variant: {
      type: 'select',
      options: ['primary'],
    },
    size: {
      type: 'select',
      options: ['small', null],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args): React.ReactElement => {
  return <Button {...args} />;
};

export const _default = Template.bind({});

_default.args = {
  children: 'Button',
};
