import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./modal.css";

export default function Modal() {
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
      <button onClick={toggleModal} className="bg-blue-600 hover:bg-blue-800 btn-modal mx-2">Add Task</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
              <div className="modal-header flex justify-between p-4 bg-blue-700 text-white">
                  <h3>Create a new task</h3>
                  <button className="close-modal font-bold text-xl" onClick={toggleModal}>
                    x
                </button>
              </div>
              <div className="modal-body p-4">
                <Formik initialValues={{
                    title: '',
                    description: '',
                    category: ''
                }}
                onSubmit={(data) => {
                    console.log(data);
                }}>
                    {() => (
                        <Form>
                            <label htmlFor="title">Title of task</label>
                            <Field name="title" id="title" type="input" placeholder="Title of your task" className="focus:outline-none focus:shadow-outline focus:border-blue-700" />

                            <label htmlFor="description">Description of task</label>
                            <Field name="description" component="textarea" id="description" placeholder="Add a description for your task" 
                            className="focus:outline-none focus:shadow-outline focus:border-blue-700" />

                            <label htmlFor="category">Select a category: </label>
                            <Field name="category" id="category" as="select" className="focus:outline-none focus:bg-white focus:border-gray-500">
                                <option value=""> -- </option>
                                <option value="work">Work</option>
                                <option value="school">School</option>
                            </Field>

                            <div>
                                <button type="submit" className="bg-blue-700">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
              </div>           
          </div>
        </div>
      )}
    </>
  );
}