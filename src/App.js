import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Contact />
        </Route>
        <Route exact path="/contact">
          <Portfolio />
        </Route>
      </Router>
    </div>
  );
}

export default App;
