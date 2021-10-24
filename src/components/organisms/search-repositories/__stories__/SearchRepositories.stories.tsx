import { Meta, Story } from '@storybook/react';

import SearchRepositories from '..';

import { SearchRepositoriesProps } from '../SearchRepositories';
import { reposMock } from '../__mocks__';

export default {
  component: SearchRepositories,
  title: 'Organisms/SearchRepositories',
  argTypes: {},
} as Meta;

const Template: Story<SearchRepositoriesProps> = (args): React.ReactElement => {
  return <SearchRepositories {...args} />;
};

export const _default = Template.bind({});

_default.args = {
  loading: false,
  placeholder: '..search',
  searchResults: reposMock,
};
