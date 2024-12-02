import EmptyProjectView from "./EmptyProjectView";
import { ProjectContext } from "@/context/ProjectProviderContext";
import ProjectView from "./ProjectView";
import Sidebar from "./Sidebar";
import { useContext } from "react";

const Main = () => {
  const { currentProject, activeProjects } = useContext(ProjectContext);

  const projectViewProj =
    currentProject !== null
      ? activeProjects.find((proj) => proj.id === currentProject)
      : null;

  return (
    <main className="flex justify-between h-svh">
      <Sidebar />
      <div className="w-full h-full">
        {projectViewProj ? (
          <ProjectView project={projectViewProj} />
        ) : (
          <EmptyProjectView />
        )}
      </div>
    </main>
  );
};

export default Main;
