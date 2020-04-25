import React, { useContext } from "react";

import NotificationContext from "./context/Notification";

const RandomComponent = () => {
  const context = useContext(NotificationContext);
  return (
    <div
      onClick={() => {
        context.showNotification({ text: "Account Created " });
      }}
    >
      Show Modal
    </div>
  );
};

export default RandomComponent;
