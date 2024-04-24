import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { ActivityTab } from "./components/ActivityTab";

export default function Activities() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Activities",
      children: <ActivityTab />,
    },
    {
      key: "2",
      label: "Progress",
      children: "Content of Tab Pane 1",
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="py-2 -mt-2 flex justify-center items-center w-full">
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="w-[100%] flex justify-center items-center"
      />
    </div>
  );
}
