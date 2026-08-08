import { useState } from "react";

import Textform from "./compontes/Textform";
import Navbar from "./compontes/Navbar";
import Alert from "./compontes/Alert";

// import "./App.css";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // toggleMode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my3">
        <Textform
          heading="Enter the text to analyza"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </div>
  );
}
