import { Meta, Story } from '@storybook/react';

import PageContainer from '..';

import { PageContainerProps } from '../PageContainer';

export default {
  component: PageContainer,
  title: 'Template/PageContainer',
  argTypes: {},
} as Meta;

const Template: Story<PageContainerProps> = (args): React.ReactElement => {
  return <PageContainer {...args} />;
};

export const _default = Template.bind({});

_default.args = {
  title: 'Page container template',
};
