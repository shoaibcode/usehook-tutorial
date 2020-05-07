import React, { useState } from "react";

// const [todos, dispatch] = useMyReducer(todolistReducer, []);

const useMyReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = (actionParams) => {
    const updatedState = reducer(state, actionParams);

    setState(updatedState);
  };

  return [state, dispatch];
};

export default useMyReducer;
