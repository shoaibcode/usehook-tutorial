import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ContextProvider } from "./context";

import Component1 from "./Component1";

function App() {
  return (
    <ContextProvider value={{ text: "Hello World" }}>
      <div className="App">
        <header className="App-header">
          <Component1 />
        </header>
      </div>
    </ContextProvider>
  );
}

export default App;
