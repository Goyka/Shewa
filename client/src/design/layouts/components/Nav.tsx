// import React from "react";
import { Link } from "react-router-dom";
import { Typography, Image, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { basic, theme } from "../../colors/colorCodes";
import shewa_logo from "../../assets/shewa_logo.png";

interface userDataType {
  userId: number;
  profileImg: string;
}

export default function Nav() {
  const { Title } = Typography;
  const token = localStorage.getItem("token");

  const userData: userDataType = {
    userId: 0,
    profileImg: "",
  };

  return (
    <div className="h-full flex justify-between items-center p-3">
      <div className="flex">
        <MenuOutlined style={iconSizeAndColor} />
      </div>
      <Link
        to="/"
        className="flex flex-row gap-1 justify-center items-center text-center"
      >
        <Image width={28} src={shewa_logo} preview={false} />
        <Title level={3} style={titleStyle}>
          Shewa
        </Title>
      </Link>
      {!token ? (
        <Link to="/user/login" className="flex">
          <Avatar
            size={34}
            style={{ backgroundColor: basic.dark }}
            icon={<UserOutlined style={{ color: basic.bright }} />}
          />
        </Link>
      ) : (
        <Link to={`/dashboard/${userData.userId}`} className="flex">
          <Avatar
            size={34}
            style={{ backgroundColor: basic.dark }}
            src={<img src={userData.profileImg} alt="profileImg" />}
          />
        </Link>
      )}
    </div>
  );
}

const titleStyle = {
  color: theme.blue,
  justifyContent: "center",
  marginBottom: "0em",
  fontWeight: "800",
};

const iconSizeAndColor = { fontSize: "24px", color: basic.dark };
