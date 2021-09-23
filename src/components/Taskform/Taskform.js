import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const TaskformSchema = Yup.object().shape({
   task: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   description: Yup.string()
     .required('Required'),
    category: Yup.string()
      .required('Required'),
 });
 
 export const Taskform = () => (
   <div>
     <Formik
       initialValues={{
         task: '',
         description: '',
         category: '',
       }}
       validationSchema={TaskformSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <div className="mb-4">
                <label htmlFor="task">Title of task</label>
                <Field name="task" id="task" className={(touched.task && errors.task) ? "border-red-500 focus:outline-none" : "border-green-500 focus:outline-none"} />
                {touched.task && errors.task && <div className="text-red-500">{errors.task}</div>}
            </div>

            <div className="mb-4">
                <label htmlFor="description">Add a description</label>
                <Field name="description" id="description" as="textarea" rows="10" className={(touched.description && errors.description) ? "border-red-500 focus:outline-none" : "border-green-500 focus:outline-none"} />
                {touched.description && errors.description && <div className="text-red-500">{errors.description}</div>}
            </div>

            <div className="mb-4">
                <label htmlFor="category">Select Category: </label>
                <Field name="category" id="category" as="select" 
                    className={(touched.category && errors.category) 
                        ? "border-red-500 focus:outline-none" 
                        : "border-green-500 focus:outline-none"}
                >
                    <option value=""></option>
                    <option value="school">School</option>    
                    <option value="work">Work</option>
                </Field>
                {touched.category && errors.category && <span className="text-red-500"> {errors.category}</span>}
            </div>

           <button type="submit" className="bg-green-600 hover:bg-green-800 mx-2">Submit</button>

         </Form>
       )}
     </Formik>
   </div>
 );