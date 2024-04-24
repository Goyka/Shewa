import { Image, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { basic } from "../../colors/colorCodes";
import shewa_logo from "../../assets/shewa_logo.png";

interface userDataType {
  userId: number;
  profileImg: string;
}

export default function Nav() {
  const token = localStorage.getItem("token");

  const userData: userDataType = {
    userId: 0,
    profileImg: "",
  };

  const handleLogoClick = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new Event("popstate"));
  };

  const handleLoginClick = () => {
    window.history.pushState({}, "", "/user/login");
    window.dispatchEvent(new Event("popstate"));
  };

  const handleDashboardClick = () => {
    window.history.pushState({}, "", `/dashboard/${userData.userId}`);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="h-full flex justify-between items-center p-3">
      <div className="flex">
        <MenuOutlined style={iconSizeAndColor} />
      </div>
      <div className="flex flex-row justify-center items-center text-center">
        <Image
          width={110}
          src={shewa_logo}
          preview={false}
          onClick={handleLogoClick}
        />
      </div>
      {!token ? (
        <Avatar
          size={28}
          style={{ backgroundColor: basic.dark }}
          icon={<UserOutlined style={{ color: basic.bright }} />}
          onClick={handleLoginClick}
        />
      ) : (
        <Avatar
          size={28}
          style={{ backgroundColor: basic.dark }}
          src={<img src={userData.profileImg} alt="profileImg" />}
          onClick={handleDashboardClick}
        />
      )}
    </div>
  );
}

const iconSizeAndColor = { fontSize: "24px", color: basic.dark };
