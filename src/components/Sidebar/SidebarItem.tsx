import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export interface itemProp {
  icon: ReactNode;
  title: string;
  content?: subItemProp[];
  url?: string;
}

interface subItemProp {
  title: string;
  url: string;
}

export const SidebarItem: React.FC<itemProp> = ({
  icon,
  title,
  content,
  url,
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  const location = useLocation();

  const isActive = content?.some((link) =>
    location.pathname.startsWith(link.url),
  );

  return (
    <>
      {content == undefined ? (
        <li>
          <NavLink
            to={url == undefined ? "#!" : url}
            className={({ isActive }) =>
              `mb-2 flex items-center px-4 py-2 ${isActive ? "font-semibold opacity-100" : "opacity-60 hover:opacity-100"}`
            }
            end
          >
            {icon}
            <span className="ml-2">{title}</span>
          </NavLink>
        </li>
      ) : (
        <li>
          <a
            href="#!"
            className={`mb-2 flex items-center justify-between px-4 py-2 ${isActive ? "font-semibold opacity-100" : "opacity-60 hover:opacity-100"}`}
            onClick={() => setSelected(!selected)}
          >
            <div className="text-center">
              {icon}
              <span className="ml-2">{title}</span>
            </div>
            {selected ? (
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            ) : (
              <FontAwesomeIcon icon={["fas", "angle-right"]} />
            )}
          </a>
          <div className={`collapse-content ${selected ? "show" : ""}`}>
            <div className="bg-white text-black">
              {content.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.url}
                  className={({ isActive }) =>
                    `block py-1 pl-8 hover:bg-slate-200 ${isActive ? "font-semibold text-blue-500" : ""}`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </li>
      )}
    </>
  );
};
