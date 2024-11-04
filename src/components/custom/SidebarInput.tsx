import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { forwardRef } from "react";

const SidebarInput = forwardRef(({ handleNewProject }, ref) => {
  return (
    <div className="flex bg-background rounded-md overflow-hidden items-center justify-between">
      <div className="h-full bg-secondary grid place-items-center cursor-pointer hover:bg-secondary/85">
        <Plus size={38} className="p-1" onClick={handleNewProject} />
      </div>
      <Input
        ref={ref}
        type="text"
        className="focus-visible:ring-0 border-0 focus-visible:ring-offset-0 text-ld"
      />
    </div>
  );
});

export default SidebarInput;
