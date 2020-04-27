import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [showForm, toggleForm] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            toggleForm(!showForm);
          }}
        >
          Toggle Form
        </button>
        {showForm && (
          <form onSubmit={onSubmit}>
            <label>
              <div>Email</div>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </label>
            <label>
              <div>Password</div>
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPasssword(event.target.value);
                }}
              />
            </label>

            <div>
              <button type="submit">Signup</button>
            </div>
          </form>
        )}
      </header>
    </div>
  );
}

export default App;
