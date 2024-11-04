import EmptyProjectView from "./EmptyProjectView";
import ProjectView from "./ProjectView";
import Sidebar from "./Sidebar";
import { giveId } from "@/lib/utils";
import { useState } from "react";

const Main = () => {
  const [projects, setProjects] = useState({
    currentProject: null,
    activeProjects: [
      { title: "Front End", desc: "loremasdjf;asdfj;lask", id: giveId() },
      { title: "BackEnd", desc: "loremasdj", id: giveId() },
    ],
  });

  return (
    <main className="flex justify-between h-svh">
      <Sidebar projects={projects.activeProjects} setProject={setProjects} />
      <div className="w-full h-full py-3 px-8">
        {projects.currentProject ? (
          <ProjectView
            activeProject={projects.activeProjects.filter(
              (proj) => proj.id === projects.currentProject
            )}
          />
        ) : (
          <EmptyProjectView />
        )}
      </div>
    </main>
  );
};

export default Main;
