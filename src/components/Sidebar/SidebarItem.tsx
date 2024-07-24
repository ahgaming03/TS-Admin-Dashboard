import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";

export interface itemProp {
  id: string;
  icon: ReactNode;
  title: string;
  content?: subItemProp[];
}
interface subItemProp {
  title: string;
}

export const SidebarItem: React.FC<itemProp> = ({
  id,
  icon,
  title,
  content,
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  // const toggle = (id: string) => {
  //   if (selected === id) {
  //     return setSelected(null);
  //   }
  //   setSelected(id);
  // };

  return (
    <li>
      <a
        href="#!"
        className="mb-2 flex items-center justify-between px-4 py-2 opacity-60 hover:opacity-100"
        onClick={() => setSelected(!selected)}
      >
        <div className="text-center">
          {icon}
          <span className="ml-2">{title}</span>
        </div>
        {content != null ? (
          selected ? (
            <FontAwesomeIcon
              icon={["fas", "angle-down"]}
              // className={sidebarOpen ? "" : "hidden"}
            />
          ) : (
            <FontAwesomeIcon
              icon={["fas", "angle-right"]}
              // className={sidebarOpen ? "" : "hidden"}
            />
          )
        ) : null}
      </a>
      {content == null ? null : (
        <div
          className={`side-content bg-white text-black ${selected ? "show" : ""}`}
        >
          {content.map((item, index) => (
            <a
              href="#!"
              key={index}
              className="block py-1 pl-8 hover:bg-slate-200"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

const subItem: React.FC<subItemProp> = ({ title }) => {
  return <a href="#!">{title}</a>;
};
