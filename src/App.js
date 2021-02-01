import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
