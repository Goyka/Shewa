import { useState } from "react";
import { Typography } from "antd";
import { toast } from "react-toastify";
import { theme } from "../design/colors/colorCodes";
import RegisterSteps from "./components/RegisterSteps";

export interface joinStateType {
  data: {
    username: string;
    password: string;
    passwordConfirm: string;
    nickname: string;
    gender: string;
    prefer: string;
    age: string;
    height: string;
    weight: string;
  };
  errors: {};
}

export default function Register() {
  const [section, setSection] = useState<number>(1);

  const handleSubmit = async () => {
    try {
      // const res = await postLoginApi();
      // if (res.status === 200) {
      //   setFormState({ data: { username: "", password: "" } });
      //   navigate("/");
      // }
    } catch (err) {
      toast.error("Something wrong... Please wait.");
      console.error(err);
    }
  };

  const { Title } = Typography;

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <header className="h-[110px] w-full flex flex-row justify-center items-center">
        <Title level={3} style={{ color: theme.blue, fontSize: "35px" }}>
          {section === 1
            ? "Step 1."
            : section === 2
            ? "Step 2."
            : section === 3
            ? "Step 3."
            : null}
        </Title>
      </header>
      <div className="flex flex-col gap-2 justify-center items-center">
        {/* section을 받아서, 회원가입 화면의 Step을 분기해주는 UI 컴포넌트 */}
        <RegisterSteps
          section={section}
          setSection={setSection}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
