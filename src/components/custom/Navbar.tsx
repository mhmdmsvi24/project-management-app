import { ModeToggle } from "../providers/mode-toggle";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-background flex justify-between items-center border-b-2 px-5 py-2 relative top-0 w-full">
        <div>Job Analyzer</div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
