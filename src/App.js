import React, { useState } from "react";
import "./App.css";

import useMyReducer from "./hooks/useMyReducer";

const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
};

const todolistReducer = (state, action) => {
  if (action.type === ACTION_TYPES.ADD_TODO) {
    return state.concat({
      text: action.payload,
      completed: false,
    });
  } else if (action.type === ACTION_TYPES.REMOVE_TODO) {
    return state.filter((todo, todoIndex) => {
      return todoIndex !== action.payload;
    });
  } else if (action.type === ACTION_TYPES.TOGGLE_TODO) {
    return state.map((todo, todoIndex) => {
      if (action.payload === todoIndex) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });
  }

  return state;
};

function App() {
  const [todos, dispatch] = useMyReducer(todolistReducer, []);

  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch({
      type: ACTION_TYPES.ADD_TODO,
      payload: text,
    });

    setText("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index} className={todo.completed ? "completed" : ""}>
                <span
                  onClick={() => {
                    dispatch({
                      type: ACTION_TYPES.TOGGLE_TODO,
                      payload: index,
                    });
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => {
                    dispatch({
                      type: ACTION_TYPES.REMOVE_TODO,
                      payload: index,
                    });
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
