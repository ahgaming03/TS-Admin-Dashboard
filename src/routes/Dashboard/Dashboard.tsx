import { TagList } from "../../components/Tag_List/TagList";
import { ProjectList } from "../../components/Project_List/ProjectList";

export const Dashboard = () => {
  return (
    <>
      <div className="mb-6 text-3xl text-gray-800">Dashboard</div>
      <TagList />
      <ProjectList />
    </>
  );
};
