import React from "react";
import useCounter from "./Hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return <div>{count}</div>;
};

export default Counter;
