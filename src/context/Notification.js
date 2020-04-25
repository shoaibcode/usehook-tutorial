import React, { useState } from "react";

import { NotificationProvider } from "./NotificationContext";
import "./style.css";

const Notification = ({ children }) => {
  const [showAlert, toggleAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("");

  return (
    <NotificationProvider
      value={{
        showAlert: (text) => {
          toggleAlert(true);
          setTextAlert(text);

          setTimeout(() => {
            toggleAlert(false);
            setTextAlert("");
          }, 4000);
        },
      }}
    >
      {children}
      {showAlert && <div class="alert">{textAlert}</div>}
    </NotificationProvider>
  );
};

export default Notification;
