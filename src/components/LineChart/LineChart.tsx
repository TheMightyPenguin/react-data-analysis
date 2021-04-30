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
  pointStart: number;
  data: DataPoint[];
  lineColor: Color | string;
};

const propsToOptions = ({
  pointStart,
  data,
  lineColor,
}: Props): Highcharts.Options => ({
  chart: {
    type: 'line',
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
      data,
      color: lineColor,
    },
  ],

  credits: {
    enabled: false,
  },

  plotOptions: {
    series: {
      pointStart,
    },
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
