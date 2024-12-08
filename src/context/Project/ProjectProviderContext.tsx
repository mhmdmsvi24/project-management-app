import { ReactNode, useReducer, useRef } from "react";

import { Project } from "@/types/project";
import { ProjectContext } from "@/context/Project/context";
import { giveId } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type Action =
  | { type: "ADD_PROJECT"; title: string }
  | { type: "SET_ACTIVE_PROJECT"; id: number };

interface ProjectState {
  currentProject: number | null;
  activeProjects: Project[];
}

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
