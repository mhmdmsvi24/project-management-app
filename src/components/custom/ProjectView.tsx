import { Button } from "../ui/button";
import { DatePicker } from "../ui/datePicker";
import { Input } from "../ui/input";
import { Project } from "@/types/project";
import { Textarea } from "../ui/textarea";

const ProjectView = ({ project }: { project: Project }) => {
  return (
    <form className="flex flex-col justify-between h-[calc(100svh_-_4rem)] p-3">
      <div className="space-y-3 *:space-y-1">
        <div>
          <div>Project Title</div>
          <div>
            <Input defaultValue={project.title} />
          </div>
        </div>
        <div>
          <div>Project Description</div>
          <div>
            <Textarea defaultValue={project.desc} />
          </div>
        </div>
        <div>
          <div>Project Deadline</div>
          <div>
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <Button variant="secondary">Save Changes</Button>
      </div>
    </form>
  );
};

export default ProjectView;
