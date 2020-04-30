import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// No Dependience => Render All State
// Empty Dependecies => Render ONce
// Dependecies => Dependecies Change

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // ComponentDidMount
  useEffect(() => {
    console.log("Count");

    return () => {
      console.log("return Count");
    };
  }, [count]);

  useEffect(() => {
    console.log("Count 1");

    return () => {
      console.log("return Count 1");
    };
  }, [count1]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>{count}</div>
          <div
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Add Count
          </div>
        </div>

        <div>
          <div>{count1}</div>
          <div
            onClick={() => {
              setCount1(count1 + 1);
            }}
          >
            Add Count 1
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
