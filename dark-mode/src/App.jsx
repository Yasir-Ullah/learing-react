import { useState } from "react";

import Textform from "./compontes/Textform";
import Navbar from "./compontes/Navbar";

// import "./App.css";

export default function App() {
  const [mode, setMode] = useState("light");

  // toggleMode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my3">
        <Textform heading="Enter the text to analyza" mode={mode} />
      </div>
    </div>
  );
}
