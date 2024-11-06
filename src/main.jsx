import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <ModeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ModeProvider>
);
