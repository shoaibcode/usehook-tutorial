import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="App">
      <form>
        <label>
          <div>Email</div>
          <input type="email" ref={emailRef} />
        </label>
      </form>
    </div>
  );
}

export default App;
