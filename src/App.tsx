import { useState } from "react";
import { TagList } from "./components/Tag_List/TagList";
import { ProjectList } from "./components/Project_List/ProjectList";
import { Footer } from "./components/_footer";
import { TopNav } from "./components/_topnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarList } from "./components/Sidebar/SidebarList";

function App() {
  const [selected, setSelected] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggle = (id: any) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="flex">
      <div
        className={`flex w-full flex-col bg-blue-500 font-normal capitalize text-white ${sidebarOpen ? "max-w-56" : "max-w-[6.5rem]"}`}
      >
        <div className="flex items-center justify-center gap-4 py-4">
          <FontAwesomeIcon icon={["fas", "camera"]} size="xl" />
          <div
            className={`text-2xl font-bold uppercase ${sidebarOpen ? "" : "hidden"}`}
          >
            Brand
          </div>
        </div>
        <hr className="opacity-50" />
        <ul className="">
          <SidebarList sidebarOpen={sidebarOpen} />
          <hr className="opacity-50" />

          <div
            className="pt-2 text-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FontAwesomeIcon
              icon={["fas", "circle-chevron-left"]}
              size="2x"
              className="cursor-pointer opacity-50 hover:opacity-100"
            />
          </div>
        </ul>
      </div>
      <div className="flex min-h-screen w-full flex-col justify-between">
        {/* Content */}
        <div className="">
          <TopNav />
          <div className="p-6">
            <div className="mb-6 text-3xl text-gray-800">Dashboard</div>
            <TagList />
            <ProjectList />
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
