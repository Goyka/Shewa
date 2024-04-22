import { basic, theme } from "../design/colors/colorCodes";

const vo2Data = [
  { month: "Nov", value: 33 },
  { month: "Dec", value: 35.6 },
  { month: "Jan", value: 36.2 },
  { month: "Feb", value: 37.2 },
  { month: "Mar", value: 39.3 },
  { month: "Apr", value: 41.9 },
];

const mileData = [
  { month: "Nov", value: 62.3 },
  { month: "Dec", value: 98.5 },
  { month: "Jan", value: 63.3 },
  { month: "Feb", value: 103.1 },
  { month: "Mar", value: 90.0 },
  { month: "Apr", value: 77.1 },
];

const pbData = [
  { month: "Nov", value: 37, goal: 25 },
  { month: "Dec", value: 38, goal: 25 },
  { month: "Jan", value: 36, goal: 25 },
  { month: "Feb", value: 31, goal: 25 },
  { month: "Mar", value: 30, goal: 25 },
  { month: "Apr", value: 26, goal: 25 },
];

const fatData = [
  { month: "Nov", value: 20, goal: 16 },
  { month: "Dec", value: 20, goal: 16 },
  { month: "Jan", value: 19, goal: 16 },
  { month: "Feb", value: 18, goal: 16 },
  { month: "Mar", value: 17, goal: 16 },
  { month: "Apr", value: 17, goal: 16 },
];

export const useGraphConfigs = () => {
  const mileConfig = {
    data: mileData,
    width: 170,
    height: 150,
    marginTop: 20,
    marginLeft: 6,
    xField: "month",
    yField: "value",
    style: {
      fill: ({ value }: any) => {
        if (value < "99") {
          return basic.lightgray;
        }
        return theme.blue;
      },
    },
    label: {
      text: ({ originData }: any) => {
        const val = parseFloat(originData?.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 10,
    },
    legend: false,
  };

  const vo2Config = {
    data: vo2Data,
    width: 170,
    height: 150,
    marginTop: 20,
    marginLeft: 6,
    xField: "month",
    yField: "value",
    point: {
      shapeField: "circle",
      sizeField: 3,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  const pbConfig = {
    data: pbData,
    width: 170,
    height: 150,
    marginTop: 20,
    marginLeft: 6,
    xField: "month",
    yField: "value",
    annotations: [
      {
        type: "lineY",
        data: [30],
        style: { arrow: true, stroke: theme.red, lineDash: [2, 1] },
        label: {
          text: "goal",
          position: "bottom",
          style: { textBaseline: "bottom" },
        },
        tooltip: false,
      },
    ],
    point: {
      shapeField: "circle",
      sizeField: 3,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  const fatConfig = {
    data: fatData,
    width: 170,
    height: 150,
    marginTop: 20,
    marginLeft: 6,
    xField: "month",
    yField: "value",
    annotations: [
      {
        type: "lineY",
        data: [15],
        style: { arrow: true, stroke: theme.red, lineDash: [2, 1] },
        label: {
          text: "goal",
          position: "bottom",
          style: { textBaseline: "bottom" },
        },
        tooltip: false,
      },
    ],
    point: {
      shapeField: "circle",
      sizeField: 3,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  return { mileConfig, vo2Config, pbConfig, fatConfig };
};
