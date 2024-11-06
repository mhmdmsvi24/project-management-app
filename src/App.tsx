import "./App.css";

import Main from "./components/custom/Main";
import Navbar from "./components/custom/Navbar";
import { ThemeProvider } from "@/providers/themeToggle/theme-provider";

/* Tasks:
1. add ref's to inputs in projectView component to be able to complete the project data

*/

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
