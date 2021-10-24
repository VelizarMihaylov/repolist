import { Meta, Story } from '@storybook/react';

import GitRepoList from '..';

import { GitRepoListProps } from '../GitRepoList';

import { reposMock } from '../__mocks__';

export default {
  component: GitRepoList,
  title: 'GitRepoList',
  argTypes: {},
} as Meta;

const Template: Story<GitRepoListProps> = (args): React.ReactElement => {
  return <GitRepoList {...args} />;
};

export const _default = Template.bind({});

_default.args = {
  repos: reposMock,
};
