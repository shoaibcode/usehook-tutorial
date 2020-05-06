import React, { useRef } from "react";

import useOnOutsideClick from "../../hooks/useOnOutsideClick";
import "./modal.css";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);
  useOnOutsideClick(modalRef, () => {
    onClose();
  });

  return (
    <div className="modal-container">
      <div ref={modalRef} className="modal-content">
        <div>Popover container</div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
