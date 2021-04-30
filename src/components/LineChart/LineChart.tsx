/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useTheme } from 'styled-components';
import type { Color } from '../../theme/theme';

export type DataPoint = {
  y: number;
  x: Date;
};

export type Props = {
  data: DataPoint[];
  lineColor: Color | string;
  type: 'line' | 'spline';
};

const propsToOptions = ({
  data,
  lineColor,
  type,
}: Props): Highcharts.Options => ({
  chart: {
    type: type,
  },

  title: {
    text: '',
  },

  xAxis: {
    type: 'datetime',
    labels: {
      /**
       * @see https://api.highcharts.com/class-reference/Highcharts?_ga=2.69504336.1748836894.1619659507-1103260639.1618936309#.dateFormat
       */
      format: '{value:%b %y}',
    },
  },

  yAxis: {
    gridLineDashStyle: 'Dash',
    title: {
      text: '',
    },
    labels: {
      enabled: false,
    },
  },

  legend: {
    enabled: false,
  },

  series: [
    {
      // @ts-ignore
      data,
      color: lineColor,
      // @ts-ignore
      marker: {
        enabled: false,
      },
    },
  ],

  credits: {
    enabled: false,
  },
});

const LineChart: React.FC<Props> = (props) => {
  const theme = useTheme();

  const highchartsOptions = propsToOptions({
    ...props,
    lineColor:
      props.lineColor in theme.colors
        ? theme.colors[props.lineColor as Color]
        : props.lineColor,
  });

  return (
    <HighchartsReact highcharts={Highcharts} options={highchartsOptions} />
  );
};

export default LineChart;
