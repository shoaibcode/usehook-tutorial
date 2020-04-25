import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Es6
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>counter: {count}</div>
        <div>
          <button
            onClick={() => {
              setCounter(count + 1);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setCounter(count - 1);
            }}
          >
            Minus
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
