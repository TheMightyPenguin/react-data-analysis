import React from 'react';
import { Story, Meta } from '@storybook/react';
import LineChart, { Props as LineChartProps } from './LineChart';

import data from './data';

const props = {
  pointStart: 2010,
  data: data.map((item) => ({
    y: item.cases,
    x: new Date(item.date),
  })),
};

export default {
  title: 'Components/LineChart',
  component: LineChart,
  args: props,
} as Meta<LineChartProps>;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  lineColor: 'positive',
};
