import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { ProjectContext } from "@/context/ProjectProviderContext";
import { useContext } from "react";

const SidebarInput = () => {
  const { sidebarInputRef, addNewProject } = useContext(ProjectContext);

  return (
    <div className="flex bg-background rounded-md overflow-hidden items-center justify-between">
      <div className="h-full bg-secondary grid place-items-center cursor-pointer hover:bg-secondary/85">
        <Plus size={38} className="p-1" onClick={addNewProject} />
      </div>
      <Input
        ref={sidebarInputRef}
        type="text"
        className="focus-visible:ring-0 border-0 focus-visible:ring-offset-0 text-ld"
      />
    </div>
  );
};

export default SidebarInput;
