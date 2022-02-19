import { useState } from "react";

const DisplayModes = () => {
  const nightMode = {
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    paddingBottom: "10px",
  };

  const lightMode = {
    backgroundColor: "white",
    color: "black",
    textDecoration: "none",
  };

  const [btnText, setbtnText] = useState("Night Mode");
  const [design, setDesign] = useState(lightMode);
  let currentMode = localStorage.getItem("mode");
  localStorage.setItem("mode", currentMode);

  const handleClick = () => {
    if (currentMode === "Light Mode") {
      setDesign(lightMode);
      setbtnText("Night Mode");
    } else {
      setDesign(nightMode);
      setbtnText("Light Mode");
    }
  };

  return [design, handleClick, btnText];
};

export default DisplayModes;
