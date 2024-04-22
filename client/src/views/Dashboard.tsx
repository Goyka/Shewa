import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Card, Typography } from "antd";
import { basic, theme } from "../design/colors/colorCodes";
import { Line, Column } from "@ant-design/charts";

export default function Dashboard() {
  const [activitiesData, setActivitiesData] = useState<any>();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { Title, Text } = Typography;

  useEffect(() => {
    // !token ? navigate("/landing") :
  }, []);

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
        if (value < "90") {
          return theme.green;
        }
        return theme.blue;
      },
    },
    label: {
      text: ({ originData }: any) => {
        const val = parseFloat(originData.value);
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
  return (
    <React.Fragment>
      <header className="py-4 flex justify-center h-[26%]">
        <Card
          style={{
            width: "95%",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex w-full gap-6">
            <div className="w-[32%] flex flex-col justify-center items-center">
              <Avatar size={70}></Avatar>
              <Title level={5} style={{ marginBottom: "-2px" }}>
                nickname
              </Title>
              <Text>Road</Text>
            </div>
            <div className="w-[68%] flex flex-col justify-start items-start">
              <Text>Mileage /month</Text>
              <Text>Vo2Max</Text>
              <Text>Personal Best (5k)</Text>
              <Text>Body Fat %</Text>
            </div>
          </div>
        </Card>
      </header>
      <main className="flex flex-col gap-4 justify-start items-center h-[74%]">
        <div className="flex gap-4 justify-center items-center w-full">
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Text>Mileage /month</Text>
            <Column {...mileConfig} />
          </Card>
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Text>Vo2Max</Text>
            <Line colorField={theme.red} {...vo2Config} />
          </Card>
        </div>
        <div className="flex gap-4 justify-center items-center w-full">
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Text>Personal Best (5k)</Text>
            <Line colorField={theme.yellow} {...pbConfig} />
          </Card>
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Text>Body Fat %</Text>
            <Line colorField={basic.lightgray} {...fatConfig} />
          </Card>
        </div>
      </main>
    </React.Fragment>
  );
}

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
