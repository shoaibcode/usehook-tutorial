import React from "react";

import { ContextConsumer } from "./context";

const Component2 = () => {
  return (
    <div>
      <ContextConsumer>
        {(value) => {
          // console.log(value);
          return <div>{value.text} </div>;
        }}
      </ContextConsumer>
    </div>
  );
};

export default Component2;
