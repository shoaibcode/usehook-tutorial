import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import useList from "./Hooks/useList";

function App() {
  const { list, push, pull } = useList();
  const [todo, setTodo] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    push(todo);
    setTodo("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label for="todo">Add Todo </label>
            <input
              type="text"
              id="todo"
              value={todo}
              onChange={(event) => {
                setTodo(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        <ul>
          {list.map((listItem, index) => {
            return (
              <li key={index}>
                <div>{listItem}</div>
                <button
                  onClick={() => {
                    pull(index);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
