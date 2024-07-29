import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { itemProp, SidebarItem } from "./SidebarItem";

const datas: itemProp[] = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={["fas", "gauge-high"]} />,
    url: "/",
  },
  {
    icon: <FontAwesomeIcon icon={["fas", "gear"]} />,
    title: "Components",
    content: [
      {
        title: "cards",
        url: "/cards",
      },
      {
        title: "button",
        url: "/button",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={["fas", "wrench"]} />,
    title: "Utilities",
    content: [
      {
        title: "ulti1",
        url: "/temp1",
      },
      {
        title: "ulti2",
        url: "/temp2",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={["fas", "folder"]} />,
    title: "Pages",
    content: [
      {
        title: "404",
        url: "/404p",
      },
      {
        title: "Blank",
        url: "/blank",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={["fas", "table"]} />,
    title: "Tables",
    url: "/table",
  },
];

export const SidebarList = () => {
  return (
    <ul>
      {datas.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.content}
          url={item.url}
        />
      ))}
    </ul>
  );
};
