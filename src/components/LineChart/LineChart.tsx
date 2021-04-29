import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export type Props = {
  title: string;
  subtitle: string;
  yAxisTitle: string;
  pointStart: number;
  series: Highcharts.Options["series"];
};

const propsToOptions = ({
  title,
  subtitle,
  yAxisTitle,
  pointStart,
  series,
}: Props): Highcharts.Options => ({
  chart: {
    type: "line",
  },

  title: {
    text: title,
  },

  subtitle: {
    text: subtitle,
  },

  yAxis: {
    title: {
      text: yAxisTitle,
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },

  series,

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart,
    },
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

const LineChart: React.FC<Props> = (props) => {
  return (
    <HighchartsReact highcharts={Highcharts} options={propsToOptions(props)} />
  );
};

export default LineChart;
