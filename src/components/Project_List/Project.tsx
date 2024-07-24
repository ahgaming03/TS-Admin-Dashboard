import React from "react";

export interface projectProp {
  title: string;
  processed: number;
  colorProcess: string;
}

export const Project: React.FC<projectProp> = ({
  title,
  processed,
  colorProcess,
}) => {
  return (
    <>
      <div className="mb-2 flex justify-between">
        <div className="">{title}</div>
        <div>{processed}%</div>
      </div>
      <div className="mb-4 h-3 w-full rounded-full bg-gray-200">
        <div
          className={`h-3 rounded-full ${colorProcess}`}
          style={{ width: `${processed}%` }}
        ></div>
      </div>
    </>
  );
};
