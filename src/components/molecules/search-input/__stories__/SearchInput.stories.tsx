import { Meta, Story } from '@storybook/react';

import SearchInput from '..';

import { SearchInputProps } from '../SearchInput';

export default {
  component: SearchInput,
  title: 'Molecule/SearchInput',
  argTypes: {},
} as Meta;

const Template: Story<SearchInputProps> = (args): React.ReactElement => {
  return <SearchInput {...args} />;
};

export const _default = Template.bind({});

_default.args = {
  placeholder: '...search',
};
