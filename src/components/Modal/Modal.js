import React, { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="rounded bg-blue-600 hover:bg-blue-800 py-2 px-4 m-2 text-white btn-modal">Add Task</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
              <div className="modal-header flex justify-between p-4 bg-blue-700 text-white">
                  <h2>Create a new task</h2>
                  <button className="close-modal font-bold text-xl" onClick={toggleModal}>
                    x
                </button>
              </div>
              <div className="modal-body p-4">
                <p>
                This is where the 
                </p>
              </div>           
          </div>
        </div>
      )}
    </>
  );
}