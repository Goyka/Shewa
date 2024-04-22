import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Card, Typography, Image } from "antd";
import { Line, Column } from "@ant-design/charts";
import { theme } from "../design/colors/colorCodes";
import { useGraphConfigs } from "../utils/useGraphConfigs";

export default function Dashboard() {
  // const [activitiesData, setActivitiesData] = useState<any>();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { Title, Text } = Typography;
  const { mileConfig, vo2Config, pbConfig, fatConfig } = useGraphConfigs();

  useEffect(() => {
    // !token ? navigate("/landing") :
  }, []);

  return (
    <React.Fragment>
      <header className="flex flex-col justify-center items-center h-[48%]">
        <div className="flex justify-around items-center w-full">
          <div className="flex flex-col justify-center items-center">
            <Avatar size={70} style={{ marginBottom: "4px" }}></Avatar>
            <Title level={5} style={{ marginBottom: "-2px" }}>
              nickname
            </Title>
            <Text>Road</Text>
          </div>
          <div className="flex flex-col justify-start items-start">
            <Text>Mileage /month</Text>
            <Text>Vo2Max</Text>
            <Text>Personal Best (5k)</Text>
            <Text>Body Fat %</Text>
          </div>
        </div>
        <Card
          style={{
            width: "95%",
            height: "210px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "100%", paddingLeft: "8px" }}>
            <Title level={5}>Recent Activity</Title>
            <Text style={{ color: theme.blue, fontWeight: 700 }}>
              "acitivity name"
            </Text>
          </div>
          <div className="flex justify-start items-center px-2 gap-10 w-full">
            <div className="flex flex-col justify-center items-center">
              <Image
                width={110}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  width: "110px",
                  height: "110px",
                }}
                src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <Text>Workout Time</Text>
              <Text>Distance</Text>
              <Text>Elevation Gain</Text>
              <Text>Avg. Pace</Text>
              <Text>Avg. Heart Rate</Text>
              <Text>Avg. Power</Text>
            </div>
          </div>
        </Card>
      </header>
      <main className="flex flex-col gap-4 justify-start items-center h-[54%]">
        <div className="flex gap-4 justify-center items-center w-full">
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Text>Mileage (km/month)</Text>
            <Column {...mileConfig} />
          </Card>
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Text>Vo2Max (ml/kg/min)</Text>
            <Line colorField={theme.red} {...vo2Config} />
          </Card>
        </div>
        <div className="flex gap-4 justify-center items-center w-full">
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Text>Personal Best (min/5k)</Text>
            <Line colorField={theme.yellow} {...pbConfig} />
          </Card>
          <Card
            style={{
              width: "45%",
              height: "170px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Text>Body Fat (%)</Text>
            <Line colorField={theme.green} {...fatConfig} />
          </Card>
        </div>
      </main>
    </React.Fragment>
  );
}
