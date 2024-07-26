import { Project } from "./Project";

export const ProjectList = () => {
  return (
    <div className="rounded bg-white">
      <div className="rounded-t border bg-gray-50 px-5 py-4 font-medium text-blue-500">
        Projects
      </div>
      <div className="px-5 py-4">
        {data.map((item, index) => (
          <Project
            key={index}
            title={item.title}
            processed={item.processed}
            colorProcess={item.colorProcess}
          />
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    title: "Server Migration",
    processed: 20,
    colorProcess: "bg-red-500",
  },
  {
    title: "Sales Tracking",
    processed: 40,
    colorProcess: "bg-yellow-500",
  },
  {
    title: "Customer Database",
    processed: 60,
    colorProcess: "bg-blue-500",
  },
  {
    title: "Account Setup",
    processed: 80,
    colorProcess: "bg-cyan-500",
  },
  {
    title: "Payout Details",
    processed: 100,
    colorProcess: "bg-green-500",
  },
  {
    title: "Other",
    processed: 1,
    colorProcess: "bg-red-500",
  },
];
