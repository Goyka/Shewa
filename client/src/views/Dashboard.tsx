import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Card, Typography, Image } from "antd";
import { Line, Column } from "@ant-design/charts";
import { basic, theme } from "../design/colors/colorCodes";
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
      <header className="flex flex-col justify-center items-center h-[38%] mt-2">
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
            height: "130px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "100%", paddingLeft: "2px" }}>
            <Title
              level={5}
              style={{
                color: theme.blue,
              }}
            >
              Recent Activity
            </Title>
            <div className="flex justify-start items-start gap-5">
              <Image
                width={50}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "50px",
                  marginTop: "8px",
                }}
                src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg"
              />
              <div className="flex flex-col">
                <Text
                  style={{
                    color: basic.dark,
                    fontWeight: 700,
                    fontSize: "19px",
                  }}
                >
                  "acitivity name"
                </Text>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <Text>Distance</Text>
                    <Title level={5} style={{ marginTop: "-1px" }}>
                      7.45km
                    </Title>
                  </div>
                  |
                  <div className="flex flex-col items-center">
                    <Text>Workout Time</Text>
                    <Title level={5} style={{ marginTop: "-1px" }}>
                      52min 12sec
                    </Title>
                  </div>
                  |
                  <div className="flex flex-col items-center">
                    <Text>Pace</Text>
                    <Title level={5} style={{ marginTop: "-1px" }}>
                      700
                    </Title>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </header>
      <main className="flex flex-col gap-4 justify-start items-center h-[62%]">
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

//  <Text>Workout Time</Text>
//             <Text>Distance</Text>
//             <Text>Elevation Gain</Text>
//             <Text>Avg. Pace</Text>
//             <Text>Avg. Heart Rate</Text>
//             <Text>Avg. Power</Text>
