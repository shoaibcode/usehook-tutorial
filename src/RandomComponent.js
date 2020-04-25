import React, { useContext } from "react";

import notificationContext from "./context/NotificationContext";

const RandomComponent = () => {
  const { showAlert } = useContext(notificationContext);
  return (
    <div
      onClick={() => {
        showAlert("User created successfully");
      }}
    >
      Show Alert
    </div>
  );
};

export default RandomComponent;
