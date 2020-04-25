import React, { useState } from "react";
import { NotificationProvider } from "./Notification";

const NotificationComponent = ({ children }) => {
  const [showNotification, toggleNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  return (
    <NotificationProvider
      value={{
        showNotification: ({ text = "" } = {}) => {
          toggleNotification(true);
          setNotificationText(text);
          setTimeout(() => {
            toggleNotification(false);
            setNotificationText("");
          }, 4000);
        },
      }}
    >
      {children}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            padding: 12,
            background: "#5e6c84",
            width: "100%",
            color: "white",
            textAlign: "center",
          }}
        >
          {notificationText}
        </div>
      )}
    </NotificationProvider>
  );
};

export default NotificationComponent;
