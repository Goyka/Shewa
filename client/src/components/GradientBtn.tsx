import { ReactNode } from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Space } from "antd";
import { gradientTheme } from "../design/colors/colorCodes";

type GradientBtnProps = {
  children: ReactNode;
  clickEvent: any;
};

export default function GradientBtn({
  children,
  clickEvent,
}: GradientBtnProps) {
  const colors1 = gradientTheme.blue;

  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <Space>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                colors1
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                colors1
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button
          type="primary"
          size="large"
          htmlType={"submit"}
          onClick={clickEvent}
        >
          {children}
        </Button>
      </ConfigProvider>
    </Space>
  );
}
