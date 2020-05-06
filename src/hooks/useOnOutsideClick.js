import React, { useEffect } from "react";

/*

useOnOutsideClick(ref, callback );

*/

const useOnOutsideClick = (ref, callback) => {
  useEffect(() => {
    const clickHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [ref, callback]);

  return null;
};

export default useOnOutsideClick;
