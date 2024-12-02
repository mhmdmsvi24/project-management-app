import "./App.css";

import Main from "./components/custom/Main";
import Navbar from "./components/custom/Navbar";
import ProjectContextProvider from "./context/ProjectProviderContext";
import { ThemeProvider } from "@/providers/themeToggle/theme-provider.tsx";
import { Toaster } from "./components/ui/toaster";

/* Tasks:
1. add ref's to inputs in projectView component to be able to complete the project data

*/

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ProjectContextProvider>
        <Navbar />
        <Main />
        <Toaster />
      </ProjectContextProvider>
    </ThemeProvider>
  );
}

export default App;
