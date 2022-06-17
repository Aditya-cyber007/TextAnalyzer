import React from "react";
import { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        About="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert} />

      <Textarea
        heading1="Enter your text to Analyse here!"
        heading2="Your Text Summary"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
