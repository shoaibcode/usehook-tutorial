import React from "react";
import logo from "./logo.svg";
import "./App.css";

import useCounter from "./Hooks/useCounter";

function App() {
  const { count, increment, decrement } = useCounter();

  console.log(count);
  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        <div>
          <button onClick={increment}>Add</button>
          <button onClick={decrement}>Dec</button>
        </div>
      </header>
    </div>
  );
}

export default App;
