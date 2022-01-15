import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Chapters from "./Components/Chapters";
import EChapters from "./Components/EChapters";
import Nazirath from "./Components/Nazirath";
import English from "./Components/English";
import Tasbih from "./Components/Tasbih";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="vh-100">
        <Router>
          <Navbar />
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
  );
}

export default App;
