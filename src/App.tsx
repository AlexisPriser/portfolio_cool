import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Cypher from "./components/Bonus/Cypher";
import Base from "./Base";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Base} />
        <Route path="/cypher" Component={Cypher} />
      </Routes>
    </Router>
  );
}

export default App;
