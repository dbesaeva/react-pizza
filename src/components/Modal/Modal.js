import React from "react";
import "./Modal.scss";
import Form from "../Form/Form";

function Modal({ isVisible = false, title, footer, onClose }) {
  return (
    !!isVisible && (
      <div className="modal" onClick={onClose}>
        <div
          className="modal-dialog"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">
              <Form />
            </div>
          </div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    )
  );
}

export default Modal;
