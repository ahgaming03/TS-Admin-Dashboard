import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

export interface cardProp {
  title: string;
  children: ReactNode;
}

export const Card: React.FC<cardProp> = ({ title, children }) => {
  return (
    <>
      <div className="mb-6">
        <div className="rounded border bg-white">
          <div className="rounded-t border-b bg-gray-50 px-5 py-2 font-semibold capitalize text-blue-500">
            {title}
          </div>
          <div className="px-5 py-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export const CardCollapse: React.FC<cardProp> = ({ title, children }) => {
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <div className="mb-6">
        <div className="rounded border bg-white">
          <a
            href="#!"
            className={`flex items-center justify-between border-b bg-gray-50 px-5 py-2 font-semibold capitalize text-blue-500 ${collapse ? "rounded-t" : "rounded"}`}
            onClick={() => setCollapse(!collapse)}
          >
            <span>{title}</span>
            {collapse ? (
              <FontAwesomeIcon icon={["fas", "angle-down"]} color="gray" />
            ) : (
              <FontAwesomeIcon icon={["fas", "angle-right"]} color="gray" />
            )}
          </a>
          <div className={`collapse-content ${collapse ? "show" : ""}`}>
            <div className="px-5 py-3 text-gray-600">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
