import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Input, Button, Cascader, Card } from "antd";
import { basic, theme } from "../design/colors/colorCodes";
import { joinStateType } from "../views/Register";
import { validator } from "../utils/validator";
import { joinSchema } from "../utils/schema";
import {
  genderOptions,
  createYearOptions,
  regionOptions,
} from "../utils/cascaderOptions";
import GradientBtn from "../components/GradientBtn";

interface stepsPropType {
  section: number;
  setSection: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => Promise<void>;
}

export default function RegisterSteps({
  section,
  setSection,
  handleSubmit,
}: stepsPropType) {
  const [formState, setFormState] = useState<joinStateType>({
    data: {
      username: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      gender: "",
      region: "",
      age: "",
      height: "",
      weight: "",
    },
    errors: {},
  });

  const handleChange = (e: any, fieldName: string) => {
    const { value } = e.target;
    const newData = {
      ...formState.data,
      [fieldName]: value,
    };

    // 변경된 데이터와 스키마를 사용하여 유효성 검사 실행
    const newErrors = validator(newData, joinSchema);

    setFormState({
      data: newData,
      errors: newErrors, // 새로운 에러 상태 저장
    });
  };

  const handleCascaderChange = (value: any, fieldName: string) => {
    const selectedValue = value[value.length - 1];
    const newData = {
      ...formState.data,
      [fieldName]: selectedValue,
    };

    const newErrors = validator(newData, joinSchema);

    setFormState({
      data: newData,
      errors: newErrors,
    });
  };

  const { Text } = Typography;
  const ageOptions = createYearOptions(1920, 2020);
  const errors: any = formState?.errors;

  return (
    <>
      {section === 1 && (
        <Card
          title={
            <div className="text-center">
              <Text strong>Choose your email address and password.</Text>
            </div>
          }
          bordered={true}
          style={{
            width: 350,
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
              placeholder=" example@email.com"
              type="text"
              onChange={(e) => handleChange(e, "username")}
              value={formState.data?.username}
              style={{ width: "100%" }}
            />
            {errors.username && <Text type="danger">{errors.username}</Text>}
            <Input
              size="large"
              placeholder=" password"
              type="password"
              onChange={(e) => handleChange(e, "password")}
              value={formState.data?.password}
              style={{ width: "100%" }}
            />
            {errors.password && <Text type="danger">{errors.password}</Text>}
            <Input
              size="large"
              placeholder=" confirm your password again"
              type="password"
              onChange={(e) => handleChange(e, "passwordConfirm")}
              value={formState.data?.passwordConfirm}
              style={{ width: "100%" }}
            />
            {errors.passwordConfirm && (
              <Text type="danger">{errors.passwordConfirm}</Text>
            )}
            <div className="flex gap-1 mt-4">
              {/*  */}
              {formState.data?.username &&
              formState.data?.password &&
              formState.data?.password === formState.data?.passwordConfirm ? (
                <Button
                  size="large"
                  type="default"
                  onClick={() => setSection(2)}
                >
                  <Text strong style={{ color: basic.dark }}>
                    Next
                  </Text>
                </Button>
              ) : (
                <Button size="large" type="dashed">
                  <Text strong style={{ color: basic.dark }}>
                    Next
                  </Text>
                </Button>
              )}
            </div>
          </div>
        </Card>
      )}
      {section === 2 && (
        <Card
          title={
            <div className="text-center">
              <Text strong>Please input profile information.</Text>
            </div>
          }
          bordered={true}
          style={{
            width: 350,
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
              placeholder=" nickname"
              type="text"
              onChange={(e) => handleChange(e, "nickname")}
              value={formState.data?.nickname}
              style={{ width: "100%" }}
            />
            {errors.nickname && <Text type="danger">{errors.nickname}</Text>}
            <Cascader
              size="large"
              options={genderOptions}
              onChange={(value) => handleCascaderChange(value, "gender")}
              placeholder=" gender"
              style={{ width: "100%" }}
            />
            {errors.gender && <Text type="danger">{errors.gender}</Text>}
            <Cascader
              size="large"
              options={regionOptions}
              onChange={(value) => handleCascaderChange(value, "region")}
              placeholder=" region"
              style={{ width: "100%" }}
            />
            {errors.region && <Text type="danger">{errors.region}</Text>}
            <div className="flex gap-1 mt-4">
              <Button size="large" type="default" onClick={() => setSection(1)}>
                <Text strong style={{ color: basic.dark }}>
                  Prev
                </Text>
              </Button>
              {formState.data?.nickname &&
              formState.data?.gender &&
              formState.data?.region ? (
                <Button
                  size="large"
                  type="default"
                  onClick={() => setSection(3)}
                >
                  <Text strong style={{ color: basic.dark }}>
                    Next
                  </Text>
                </Button>
              ) : (
                <Button size="large" type="dashed">
                  <Text strong style={{ color: basic.dark }}>
                    Next
                  </Text>
                </Button>
              )}
            </div>
          </div>
        </Card>
      )}
      {section === 3 && (
        <Card
          title={
            <div className="text-center">
              <Text strong>Please input the last of infomation.</Text>
            </div>
          }
          bordered={true}
          style={{
            width: 350,
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
            <Cascader
              size="large"
              options={ageOptions}
              onChange={(value) => handleCascaderChange(value, "age")}
              placeholder=" age"
              style={{ width: "100%" }}
            />
            {errors.age && <Text type="danger">{errors.age}</Text>}
            <Input
              size="large"
              placeholder=" height"
              type="text"
              onChange={(e) => handleChange(e, "height")}
              value={formState.data?.height}
              style={{ width: "100%" }}
            />
            {errors.height && <Text type="danger">{errors.height}</Text>}
            <Input
              size="large"
              placeholder=" weight"
              type="text"
              onChange={(e) => handleChange(e, "weight")}
              value={formState.data?.weight}
              style={{ width: "100%" }}
            />
            {errors.weight && <Text type="danger">{errors.weight}</Text>}
            <div className="flex gap-1 mt-4">
              <Button size="large" type="default" onClick={() => setSection(2)}>
                <Text strong style={{ color: basic.dark }}>
                  Prev
                </Text>
              </Button>

              {formState.data?.age &&
              formState.data?.height &&
              formState.data?.weight ? (
                <GradientBtn clickEvent={handleSubmit}>
                  <Text strong style={{ color: basic.bright }}>
                    Go
                  </Text>
                </GradientBtn>
              ) : (
                <Button size="large" type="dashed">
                  <Text strong style={{ color: basic.dark }}>
                    Go
                  </Text>
                </Button>
              )}
            </div>
          </div>
          <sub className="flex justify-center items-center text-center mt-4">
            <Text type="secondary">
              By continuing, you agree to{" "}
              <Link to="/docs/user_privacy">
                <Text
                  type="secondary"
                  style={{
                    color: theme.blue,
                    borderBottom: `1px solid ${theme.blue}`,
                  }}
                >
                  provide your personal information.
                </Text>
              </Link>
              <Text type="secondary">
                {" "}
                Your valuable personal information will be thoroughly protected
                and used only for the purpose of exercise data analysis.
              </Text>
            </Text>
          </sub>
        </Card>
      )}
    </>
  );
}
