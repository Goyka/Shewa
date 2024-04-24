import { Card, Typography, Avatar } from "antd";
import { UserOutlined, HeartOutlined, LinkOutlined } from "@ant-design/icons";
import { basic, theme } from "../../design/colors/colorCodes";

export const ActivityTab = () => {
  const { Title, Text } = Typography;

  return (
    <div className="px-3 w-[100vw]">
      {/* card area */}
      <Card
        className="w-full h-[500px]"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <header className="w-full px-2">
          <Title
            level={5}
            style={{
              color: theme.green,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Activity Status
          </Title>
          <div className="flex justify-start items-start">
            <div className="flex gap-3 mt-2">
              <Avatar
                size={42}
                style={{ backgroundColor: basic.dark }}
                icon={<UserOutlined style={{ color: basic.bright }} />}
              />
              <div className="flex flex-col">
                <Text
                  style={{
                    color: basic.dark,
                    fontSize: "17px",
                    fontWeight: "600",
                  }}
                >
                  nickname
                </Text>
                <Text
                  style={{
                    color: basic.lightgray,
                    fontSize: "13px",
                  }}
                >
                  2024/04/23 9:30 AM | Seoul
                </Text>
              </div>
            </div>
          </div>
        </header>
        <main className="flex flex-col justify-start items-start mt-3 px-2 w-full h-full">
          <div className="flex justify-between items-center w-full">
            <Title level={4}>"activity title"</Title>
            <LinkOutlined
              style={{
                fontSize: "20px",
                marginTop: "-10px",
              }}
            />
          </div>
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
          <div className="bg-gray-200 w-full h-[260px] rounded-md">
            {/* map area */}
          </div>
          <div className="flex justify-start items-center gap-3 px-1 w-full mt-2 text-xl">
            {/* icon area */}
            <HeartOutlined />
          </div>
        </main>
      </Card>
    </div>
  );
};
