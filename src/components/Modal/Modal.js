import React, { useState } from "react";

import "./modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(modal => !modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="bg-blue-600 hover:bg-blue-800 btn-modal mx-2">{props.title}</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
              <div className="modal-header flex justify-between p-4 bg-blue-700 text-white">
                  <h3>{props.title}</h3>
                  <button className="close-modal font-bold text-xl" onClick={toggleModal}>
                    x
                </button>
              </div>
              <div className="modal-body p-4">
                {props.view}
              </div>           
          </div>
        </div>
      )}
    </>
  );
}