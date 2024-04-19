import { Typography } from "antd";
import { theme } from "../design/colors/colorCodes";

export default function Privacy() {
  const { Title, Text } = Typography;
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 w-full h-full">
      <Title level={3}>개인정보 제공 동의</Title>
      <p className="mb-2">
        <Text>
          사용자께서는, 본 동의서에 읽는 것으로 개인정보를 제공하는 데
          동의합니다. 제공되는 정보는 보호될 것이며, 오직 운동 데이터의 분석
          목적으로만 사용될 것을 약속합니다.
        </Text>
      </p>
      <p className="mb-2">
        <Text>
          서비스와 공유되는 개인정보는 이름, 나이, 성별, 키와 몸무게, 운동 활동
          내역 등을 포함하며, 이는 운동 프로그램의 효과성을 평가하고 개선하기
          위한 목적으로 사용될 것입니다.
        </Text>
      </p>
      <p className="mb-3">
        <Text>
          이 동의는 제 개인정보 보호와 사용에 대한 이해를 나타내며, 언제든지
          철회할 수 있음을 알고 있습니다.
        </Text>
      </p>
      <Text strong style={{ fontSize: "17px" }}>
        <Text strong style={{ color: theme.blue, fontSize: "17px" }}>
          쇼와(Shewa){" "}
        </Text>
        프로덕트팀
      </Text>
    </div>
  );
}
