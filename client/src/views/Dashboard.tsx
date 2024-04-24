import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Avatar, Card, Typography, Image } from "antd";
import { Line, Column } from "@ant-design/charts";
import { PlusOutlined } from "@ant-design/icons";
import { basic, theme } from "../design/colors/colorCodes";
import { useGraphConfigs } from "../utils/useGraphConfigs";

export default function Dashboard() {
  // const [activitiesData, setActivitiesData] = useState<any>();

  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  const { Title, Text } = Typography;
  const { mileConfig, vo2Config, pbConfig, fatConfig } = useGraphConfigs();

  useEffect(() => {
    // !token ? navigate("/landing") :
  }, []);

  return (
    <div className={`w-full h-auto bg-gray-50`}>
      <header className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full px-3 overflow-hidden">
          <Image
            width={"100%"}
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              height: "100px",
              marginTop: "16px",
            }}
            src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/279279834_5298830383506720_8277120810420960751_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TVjmdAXOMT8Ab6kNf2e&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBJiYl-147cLF6frrcc1L1lGJBprN3kCFbjD2m9-zfzZg&oe=662C4E12"
          />
        </div>
        <div className="flex justify-around items-center w-full h-[150px] p-2 mt-1">
          <div className="flex flex-col justify-center items-center ">
            <Avatar size={53} style={{ marginBottom: "2px" }} />
            <Title level={5} style={{ marginBottom: "-2px" }}>
              nickname
            </Title>
            <Text>Road</Text>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-9 justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <Text>Vo2Max</Text>
                <Title level={5} style={{ marginTop: "-1px" }}>
                  41.8
                </Title>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Text>Body Fat</Text>
                <Title level={5} style={{ marginTop: "-1px" }}>
                  17%
                </Title>
              </div>
            </div>
          </div>
        </div>
        <Card
          style={{
            width: "95%",
            height: "130px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="w-full px-2">
            <Title
              level={5}
              style={{
                color: theme.blue,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Recent Activity
              <PlusOutlined />
            </Title>
            <div className="flex justify-start items-start gap-4">
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
      <main className="flex flex-col gap-4 justify-start items-center py-4">
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
    </div>
  );
}

//  <Text>Workout Time</Text>
//             <Text>Distance</Text>
//             <Text>Elevation Gain</Text>
//             <Text>Avg. Pace</Text>
//             <Text>Avg. Heart Rate</Text>
//             <Text>Avg. Power</Text>
