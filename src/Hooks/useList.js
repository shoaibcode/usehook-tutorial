import React, { useState } from "react";

/*

Property
 list: []

Method:
 push(value) - to add value to a list
 pull(index) - remove values from index 


*/

const useList = () => {
  const [list, setList] = useState(["React", "React Hooks"]);

  const push = (value) => {
    const newList = list.concat(value);
    setList(newList);
  };

  const pull = (index) => {
    const newList = list.filter((listitem, listIndex) => {
      return listIndex !== index;
    });

    setList(newList);
  };

  return {
    list: list,
    push: push,
    pull: pull,
  };
};

export default useList;
