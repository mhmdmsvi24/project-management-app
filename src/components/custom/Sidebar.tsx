import SidebarInput from "./SidebarInput";
import { giveId } from "@/lib/utils";
import { useRef } from "react";

const Sidebar = ({ projects, setProject }) => {
  const sidebarInputRef = useRef<HTMLInputElement | undefined>();

  // To get the sidebar input value
  function getSidebarInputValue() {
    const res = sidebarInputRef.current?.value;
    return res;
  }

  function handleAddNewProject() {
    const projTitle = getSidebarInputValue();
    if (projTitle.length) {
      setProject((prev) => ({
        ...prev,
        activeProjects: [
          ...prev.activeProjects,
          { title: projTitle, desc: "Add Desc", id: giveId() },
        ],
      }));
    } else {
      console.log("title is empty"); //! add Error component
    }
  }

  return (
    <>
      <aside
        className="min-w-[300px] h-screen sticky top-0 bg-secondary/30 flex flex-col gap-3
    shadow-[2px_2px_10px_0_rgba(0, 0, 0, 0.675)] shadow-gray-800 p-4 backdrop-blur-xl"
      >
        <SidebarInput ref={sidebarInputRef} handleNewProject={handleAddNewProject} />
        <ul className="flex flex-col gap-2 list-decimal list-inside">
          {projects.map((proj, ind) => (
            <li
              className="list-none bg-secondary px-2 py-3 rounded-md hover:bg-secondary/85 cursor-pointer"
              key={`${proj.title}-${ind}`}
              onClick={() =>
                setProject((prev) => ({
                  ...prev,
                  currentProject: proj.id,
                }))
              }
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
