import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { Props as TextProps } from './Text';
import Stack from '../Stack/Stack';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Covid Cases by State',
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
};

export const KPI = Template.bind({});
KPI.args = {
  variant: 'kpi',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
};

export const SecondaryMetric = () => (
  <Stack spacing="medium">
    <Text variant="h3" color="header">
      High
    </Text>
    <Text variant="h2" color="positive">
      3541
    </Text>
    <Text variant="body" color="body">
      Mar 11
    </Text>
  </Stack>
);
