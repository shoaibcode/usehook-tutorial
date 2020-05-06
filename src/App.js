import React, { useState } from "react";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowModal(true)}>Show Modal </button>
        {showModal ? (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </header>
    </div>
  );
}

export default App;
