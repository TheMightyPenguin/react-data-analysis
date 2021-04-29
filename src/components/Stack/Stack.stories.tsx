import React from 'react';
import { Story, Meta } from '@storybook/react';
import Stack, { Props as StackProps } from './Stack';

const Item = () => {
  return <div style={{ backgroundColor: 'pink' }}>Item</div>;
};

const defaultChildren = [<Item key={0} />, <Item key={1} />, <Item key={2} />];

export default {
  title: 'Components/Stack',
  component: Stack,
  args: {
    children: defaultChildren,
  },
} as Meta<StackProps>;

const Template: Story<StackProps> = (args) => <Stack {...args} />;

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  spacing: 'none',
};

export const SmallSpacing = Template.bind({});
SmallSpacing.args = {
  spacing: 'small',
};

export const MediumSpacing = Template.bind({});
MediumSpacing.args = {
  spacing: 'medium',
};

export const LargeSpacing = Template.bind({});
LargeSpacing.args = {
  spacing: 'large',
};
