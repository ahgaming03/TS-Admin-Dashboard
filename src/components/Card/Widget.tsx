import React, { ReactNode } from "react";

export interface widgetProp {
  title: string;
  icon: ReactNode;
  content: string | ReactNode;
  borderColor?: string;
  textColor?: string;
}
export const Widget: React.FC<widgetProp> = ({
  title,
  content,
  icon,
  borderColor = "border-l-blue-500",
  textColor = "text-blue-500",
}) => {
  return (
    <>
      <div className="mb-6 px-3">
        <div className={`w-full rounded border-l-4 bg-white ${borderColor}`}>
          <div className="flex items-center gap-2 p-5">
            <div className="flex-grow">
              <div className={`${textColor} text-xs`}>{title}</div>
              <div className="text-xl font-medium">{content}</div>
            </div>
            {icon}
          </div>
        </div>
      </div>
    </>
  );
};
