import React, { useState } from "react";

/*

Property: hovering: Boolean


Method:
 onMouseOver
 onMouseLeave

*/

const useHover = () => {
  const [hovering, setHovering] = useState(false);

  const onMouseOver = () => {
    setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
  };

  return {
    hovering,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
  };
};

export default useHover;
