import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { theme, basic } from "../design/colors/colorCodes";
import GradientBtn from "../components/GradientBtn";
import { toast } from "react-toastify";

export default function Landing() {
  const navigate = useNavigate();
  const { Title, Text } = Typography;

  const handleStartButton = () => {
    toast.info("Redirecting to the Join page.");
    navigate("/user/join");
  };

  return (
    <div className="flex flex-col justify-center items-center text-start w-full h-full">
      <div className="relative w-full h-full overflow-hidden p-4">
        <div className="flex flex-col items-center justify-end h-[70%]">
          <div
            style={{
              textAlign: "start",
            }}
          >
            <div
              className="mr-2 flex justify-end"
              style={{
                color: theme.blue,
              }}
            >
              <LoadingOutlined
                style={{ fontSize: "60px", marginBottom: "-30px" }}
              />
            </div>
            <Title
              level={2}
              style={{
                color: basic.bright,
                marginBottom: "16px",
                textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              Your
              <br />
              data analyst for running workouts.
            </Title>
            {/* <Title
              level={1}
              style={{
                color: theme.blue,
                fontWeight: "800",
              }}
            >
              shewa
            </Title> */}
            <div
              style={{
                width: "108px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
                borderRadius: "8px",
              }}
            >
              <GradientBtn clickEvent={handleStartButton}>
                <Text
                  strong
                  style={{
                    color: basic.bright,
                    width: "100%",
                  }}
                >
                  Get started
                </Text>
              </GradientBtn>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/bgv_1080_30fps.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
