import "./App.css";

import Navbar from "./components/navigation/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background">
        {/* Navbar */}
        <Navbar />
        {/* Main */}
        <div className="container mx-auto">Hello main</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
