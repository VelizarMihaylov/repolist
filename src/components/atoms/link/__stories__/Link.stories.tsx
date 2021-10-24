import { Meta, Story } from '@storybook/react';

import Link from '..';

import { LinkProps } from '../Link';

export default {
  component: Link,
  title: 'Atom/Link',
  argTypes: {},
} as Meta;

const Template: Story<LinkProps> = (args): React.ReactElement => {
  return <Link {...args}>Link to somewhere</Link>;
};

export const _default = Template.bind({});

_default.args = {
  href: '#',
};
