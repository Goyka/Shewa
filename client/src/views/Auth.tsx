import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Typography, Input, Card } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { theme, basic } from "../design/colors/colorCodes";
import { validator } from "../utils/validator";
import { loginSchema } from "../utils/schema";
import GradientBtn from "../components/GradientBtn";

interface loginStateType {
  data: {
    username: string;
    password: string;
  };
  errors: {};
}

export default function Auth() {
  const [formState, setFormState] = useState<loginStateType>({
    data: {
      username: "",
      password: "",
    },
    errors: {},
  });
  const [isSubmit, setIsSubmit] = useState(false);
  // const navigate = useNavigate();
  const { Title, Text, Link } = Typography;
  const spin = { color: theme.blue };

  const handleChange = (e: any, fieldName: string) => {
    const { value } = e.target;
    const newData = {
      ...formState.data,
      [fieldName]: value,
    };

    // 변경된 데이터와 스키마를 사용하여 유효성 검사 실행
    const newErrors = validator(newData, loginSchema);

    setFormState({
      data: newData,
      errors: newErrors, // 새로운 에러 상태 저장
    });
  };

  const handleSubmit = async () => {
    setIsSubmit(true);
    try {
      // const res = await postLoginApi();
      // if (res.status === 200) {
      //   setFormState({ data: { username: "", password: "" } });
      //   navigate("/dashboard");
      // }
    } catch (err) {
      console.error(err);
    }
    setIsSubmit(false);
  };

  const errors: any = formState?.errors;

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <header className="h-[110px] flex flex-col text-center items-center">
        <Title level={1}>Your graphic based data storage.</Title>
      </header>
      <Card
        title={
          <div className="text-center">
            <Text strong>Run, Save, Check with </Text>
            <Text strong style={{ color: theme.blue, fontSize: "16px" }}>
              Shewa
            </Text>
          </div>
        }
        bordered={true}
        style={{
          width: 330,
        }}
      >
        <div
          style={{
            width: "20em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Input
            size="large"
            placeholder=" 이메일 주소"
            type="text"
            onChange={(e) => handleChange(e, "username")}
            value={formState.data?.username}
          />
          {errors.username && <Text type="danger">{errors.username}</Text>}
          <Input
            size="large"
            placeholder=" 패스워드"
            type="password"
            onChange={(e) => handleChange(e, "password")}
            value={formState.data?.password}
            suffix={isSubmit ? <SyncOutlined spin style={spin} /> : null}
          />
          {errors.password && <Text type="danger">{errors.password}</Text>}
          <sub className="flex gap-2">
            <Text type="secondary">이번이 처음이시라면?</Text>
            <Link
              href="/user/join"
              target="_self"
              style={{
                color: theme.blue,
                borderBottom: `1px solid ${theme.blue}`,
              }}
            >
              회원가입 하기
            </Link>
          </sub>
          <div className="flex gap-1 mt-4">
            <GradientBtn clickEvent={handleSubmit}>
              <Text strong style={{ color: basic.bright, width: "100%" }}>
                로그인
              </Text>
            </GradientBtn>
          </div>
        </div>
      </Card>
    </div>
  );
}
