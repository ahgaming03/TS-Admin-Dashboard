import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { itemProp, SidebarItem } from "./SidebarItem";

interface sidebarListProp {
  sidebarOpen: boolean;
}

const datas: itemProp[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={["fas", "gauge-high"]} />,
  },
  {
    id: "comp",
    icon: <FontAwesomeIcon icon={["fas", "gear"]} />,
    title: "Components",
    content: [
      {
        title: "button1",
      },
      {
        title: "button2",
      },
    ],
  },
  {
    id: "ult",
    icon: <FontAwesomeIcon icon={["fas", "wrench"]} />,
    title: "Utilities",
    content: [
      {
        title: "ulti1",
      },
      {
        title: "ulti2",
      },
    ],
  },
];

export const SidebarList: React.FC<sidebarListProp> = ({ sidebarOpen }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = (id: string) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <ul>
      {datas.map((item, index) => (
        <SidebarItem
          key={index}
          id={item.id + index}
          icon={item.icon}
          title={item.title}
          content={item.content}
        />
      ))}
    </ul>
  );
};
