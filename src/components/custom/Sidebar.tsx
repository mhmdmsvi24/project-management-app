import { ProjectContext } from "@/context/Project/context";
import SidebarInput from "./SidebarInput";
import { useContext } from "react";

const Sidebar = () => {
  const { activeProjects, setActiveProject } = useContext(ProjectContext);

  return (
    <>
      <aside
        className="min-w-[300px] h-screen sticky top-0 bg-secondary/30 flex flex-col gap-3
    shadow-[2px_2px_10px_0_rgba(0, 0, 0, 0.675)] shadow-gray-800 p-4 backdrop-blur-xl"
      >
        <SidebarInput />
        <ul className="flex flex-col gap-2 list-decimal list-inside">
          {activeProjects.map((proj, ind) => (
            <li
              className="px-2 py-3 list-none rounded-md cursor-pointer bg-secondary hover:bg-secondary/85"
              key={`${proj.title}-${ind}`}
              onClick={() => setActiveProject(proj.id)}
            >
              {proj.title}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
