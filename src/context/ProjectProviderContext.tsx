import React, { ReactNode, createContext, useReducer, useRef } from "react";

import { Project } from "@/types/project";
import { giveId } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Define action types
type Action =
  | { type: "ADD_PROJECT"; title: string }
  | { type: "SET_ACTIVE_PROJECT"; id: number };

// Define the initial state type
interface ProjectState {
  currentProject: number | null;
  activeProjects: Project[];
}

// Define the context type
interface ProjectContextType {
  currentProject: number | null;
  activeProjects: Project[];
  addNewProject: () => void;
  sidebarInputRef: React.RefObject<HTMLInputElement>;
  setActiveProject: (id: number) => void;
}

// Create the context with default values
export const ProjectContext = createContext<ProjectContextType>({
  currentProject: null,
  activeProjects: [],
  addNewProject: () => {},
  sidebarInputRef: React.createRef(),
  setActiveProject: () => {},
});

// Define the reducer function
function projectReducer(state: ProjectState, action: Action): ProjectState {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        activeProjects: [
          ...state.activeProjects,
          { title: action.title, desc: "Add Desc", id: giveId() },
        ],
      };
    case "SET_ACTIVE_PROJECT":
      return {
        ...state,
        currentProject: action.id,
      };
    default:
      return state;
  }
}

// Define the provider component
export default function ProjectContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { toast } = useToast();
  const sidebarInputRef = useRef<HTMLInputElement>(null);

  const initialState: ProjectState = {
    currentProject: null,
    activeProjects: [
      { title: "Front End", desc: "loremasdjf;asdfj;lask", id: giveId() },
      { title: "BackEnd", desc: "loremasdj", id: giveId() },
    ],
  };

  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    initialState
  );

  // Function to add a new project
  function handleAddNewProject() {
    const projTitle = sidebarInputRef.current?.value;
    if (projTitle && projTitle.length) {
      projectDispatch({ type: "ADD_PROJECT", title: projTitle });
    } else {
      toast({
        title: "Title Can not be empty",
        description: "Try clear & readable name for you projects",
        duration: 3000,
        variant: "destructive",
      });
    }
  }

  // Function to set the active project
  function handleSetActiveProject(id: number) {
    projectDispatch({ type: "SET_ACTIVE_PROJECT", id });
  }

  const ctxValue = {
    currentProject: projectState.currentProject,
    activeProjects: projectState.activeProjects,
    addNewProject: handleAddNewProject,
    sidebarInputRef,
    setActiveProject: handleSetActiveProject,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}
