import React, { createContext } from "react";

import { Project } from "@/types/project";

interface ProjectContextType {
  currentProject: number | null;
  activeProjects: Project[];
  addNewProject: () => void;
  sidebarInputRef: React.RefObject<HTMLInputElement>;
  setActiveProject: (id: number) => void;
}

const ProjectContext = createContext<ProjectContextType>({
  currentProject: null,
  activeProjects: [],
  addNewProject: () => {},
  sidebarInputRef: React.createRef(),
  setActiveProject: () => {},
});

export {ProjectContext};