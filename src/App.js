import React from "react";
import logo from "./logo.svg";
import "./App.css";

import useHover from "./hooks/useHover";

function App() {
  const { hovering, onMouseLeave, onMouseOver } = useHover();
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
          className="App-logo"
          alt="logo"
        />
        {hovering ? "Hovering" : "Not hovering"}
      </header>
    </div>
  );
}

export default App;
