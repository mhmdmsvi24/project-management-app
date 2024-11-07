import React, { createContext, useRef, useState } from "react";

import { Project } from "@/types/project";
import { giveId } from "@/lib/utils";

interface ProjectContextType {
  currentProject: number | null;
  activeProjects: Project[];
  addNewProject: () => void;
  sidebarInputRef: React.RefObject<HTMLInputElement>;
  setActiveProject: (id: number) => void;
}

export const ProjectContext = createContext<ProjectContextType>({
  currentProject: null,
  activeProjects: [],
  addNewProject: () => {},
  sidebarInputRef: React.createRef(),
  setActiveProject: () => {},
});

export default function ProjectContextProvider({ children }: { children: React.ReactNode }) {
  const sidebarInputRef = useRef<HTMLInputElement>();

  const [projects, setProjects] = useState({
    currentProject: null,
    activeProjects: [
      { title: "Front End", desc: "loremasdjf;asdfj;lask", id: giveId() },
      { title: "BackEnd", desc: "loremasdj", id: giveId() },
    ],
  });

  function handleAddNewProject() {
    const projTitle = sidebarInputRef.current?.value;
    if (projTitle && projTitle.length) {
      setProjects((prev) => ({
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

  function handleSetActiveProject(id: number) {
    setProjects((prev) => {
      const selectedProject = prev.activeProjects.find((proj) => proj.id === id);
      return {
        ...prev,
        currentProject: selectedProject ? selectedProject.id : null,
      };
    });
  }

  const ctxValue = {
    currentProject: projects.currentProject,
    activeProjects: projects.activeProjects,
    addNewProject: handleAddNewProject,
    sidebarInputRef,
    setActiveProject: handleSetActiveProject,
  };

  return <ProjectContext.Provider value={ctxValue}>{children}</ProjectContext.Provider>;
}
