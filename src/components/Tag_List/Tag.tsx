import React, { ReactNode } from "react";

interface tagProp {
  title: string;
  icon: ReactNode;
  content: string | ReactNode;
  borderColor: string;
  textColor: string;
}

export const Tag: React.FC<tagProp> = ({
  title,
  content,
  icon,
  borderColor,
  textColor,
}) => {
  return (
    <div className={`w-full rounded border-l-4 bg-white ${borderColor}`}>
      <div className="flex items-center gap-2 p-5">
        <div className="flex-grow">
          <div className={`${textColor} text-xs`}>{title}</div>
          <div className="text-xl font-medium">{content}</div>
        </div>
        {icon}
      </div>
    </div>
  );
};
