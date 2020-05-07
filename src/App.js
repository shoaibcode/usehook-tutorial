import React, { useReducer } from "react";
import "./App.css";

const counterReducer = (state, action) => {
  console.log("state", state);
  console.log("Action ", action);

  if (action.type === "ADD_COUNT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "SUBTRACT_COUNT") {
    return {
      count: state.count - 1,
    };
  }

  return state;
};

function App() {
  // const [state, setState] = useState({ count: 0 })
  // setState(false)
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            dispatch({ type: "ADD_COUNT" });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch({ type: "SUBTRACT_COUNT" });
          }}
        >
          Dec
        </button>
        {state.count}
      </header>
    </div>
  );
}

export default App;
