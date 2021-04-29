import React from "react";
import { Story, Meta } from "@storybook/react";
import LineChart, { Props as LineChartProps } from "./LineChart";

export default {
  title: "Components/LineChart",
  component: LineChart,
  args: {},
} as Meta<LineChartProps>;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
