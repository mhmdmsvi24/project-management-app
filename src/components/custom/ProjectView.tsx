import { DatePicker } from "../ui/datePicker";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ProjectView = ({ project }) => {
  console.log(project);

  return (
    <section>
      <div>
        <div>Project Title</div>
        <div>
          <Input />
        </div>
      </div>
      <div>
        <div>Project Description</div>
        <div>
          <Textarea />
        </div>
      </div>
      <div>
        <div>Project Deadline</div>
        <div>
          <DatePicker />
        </div>
      </div>
    </section>
  );
};

export default ProjectView;
