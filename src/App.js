import React, { useContext, useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Chapters from "./Components/Chapters";
import EChapters from "./Components/EChapters";
import Nazirath from "./Components/Nazirath";
import English from "./Components/English";
import Tasbih from "./Components/Tasbih";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MiniNav from "./Components/MiniNav";
import themeContext from "./Components/Context/themeContext";

function App() {
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

  const [theme, settheme] = useState(lightMode);
  const [btnText, setBtnText] = useState("Night Mode");

  const handleClick = () => {
    if (btnText === "Night Mode") {
      settheme(nightMode);
      setBtnText("Light Mode");
    } else {
      settheme(lightMode);
      setBtnText("Night Mode");
    }
  };

  const design = useContext(themeContext);

  return (
    <themeContext.Provider value={theme}>
      <div className="vh-100">
        <Router>
          <Navbar />
          <MiniNav
            design={design}
            btnText={btnText}
            handleClick={handleClick}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/chapters">
              <Chapters />
            </Route>
            <Route exact path="/echapters">
              <EChapters />
            </Route>
            <Route exact path="/chapters/:id">
              <Nazirath />
            </Route>
            <Route exact path="/echapters/:id2">
              <English />
            </Route>
            <Route exact path="/tasbih">
              <Tasbih />
            </Route>
          </Switch>
        </Router>
      </div>
    </themeContext.Provider>
  );
}

export default App;
