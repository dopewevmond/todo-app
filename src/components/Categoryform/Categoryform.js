import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const CategoryFormSchema = Yup.object().shape({
    new_category: Yup.string()
      .required('Required'),
 });
 
 export const CategoryForm = () => (
   <div>
     <Formik
       initialValues={{
         new_category: '',
       }}
       validationSchema={CategoryFormSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <div className="mb-4">
                <label htmlFor="new-category">Name of category</label>
                <Field name="new_category" id="new-category" className={(touched.new_category && errors.new_category) ? "border-red-500 focus:outline-none" : "border-green-500 focus:outline-none"} />
                {touched.new_category && errors.new_category && <div className="text-red-500">{errors.new_category}</div>}
            </div>

           <button type="submit" className="bg-green-600 hover:bg-green-800 mx-2">Add category</button>
         </Form>
       )}
     </Formik>
   </div>
 );