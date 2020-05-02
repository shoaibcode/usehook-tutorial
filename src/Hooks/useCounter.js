import React, { useState } from "react";

// count
// increment
// decrement

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count: count,
    increment: increment,
    decrement: decrement,
  };
};

export default useCounter;
