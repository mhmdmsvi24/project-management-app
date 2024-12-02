import { ModeToggle } from "@/providers/themeToggle/mode-toggle";

const Navbar = () => {
  return (
    <nav>
      <div className="sticky top-0 flex items-center justify-between w-full h-16 px-5 py-2 border-b-2 bg-background">
        <div>Job Analyzer</div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
