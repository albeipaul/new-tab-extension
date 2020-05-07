import React from "react";

import facts from "./facts";

import "./App.scss";

function App() {
  const item = facts[Math.floor(Math.random() * facts.length)];

  return (
    <div className="app">
      <div className="container">
        <div className="title">New fact in every new tab</div>
        <div className="fact">{item}</div>
      </div>
    </div>
  );
}

export default App;
