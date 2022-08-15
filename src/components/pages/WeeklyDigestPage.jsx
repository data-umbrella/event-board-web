import React from 'react';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

/**
 * Defines the form component for the weekly digest
 * @returns {React.Component} - returns a react component
 */
function WeeklyDigestFormComponent() {
  return (
    <Form>
      <div className="w-full">
        <div className="flex items-end pb-28 justify-center text-sm">
          <div className={`${formStyleClasses.inputContainer} w-1/3 mb-0.5`}>
            <label className="block" htmlFor="email">Email address</label>
            <Field
              type="email"
              name="email"
              className={formStyleClasses.input}
            />
          </div>
          <button className="px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm bg-violet-600">
            Subscribe
          </button>
        </div>
      </div>
    </Form>
  )
}

/**
 * Defines a function to map Formik props to form values
 * Function name matches Formik option key mapPropsToValues
 * @param {} props - includes email and password
 * @returns {object} - formatted field values
 */
export function mapPropsToValues (props) {
  return {
    email: props.email || '',
  }
}

/**
 * Defines the logic for handling form submission
 * Function name matches Formik option key handleSubmit
 * @param {} values - email and password
 * @returns {Response} - fetch response object
 */
export function handleSubmit(values, { props }) {
  props.handleFormSubmit(values);
}

/**
 * Defines a schema for form validations
 * Constant name matches Formik option key validationSchema
 * @constant
 * @type {object}
 */
export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Field is required'),
});

/**
 * Wraps WeeklyDigestForm with the withFormik Higher-order component
 */
export const WeeklyDigestForm = withFormik({
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(WeeklyDigestFormComponent);

function WeeklyDigestPage() {
  function handleSubmit() {

  }

  return (
    <div className="p-20">
      <div className="container mx-auto p-12 text-center">
        <h1 className="font-bold text-3xl">Subscribe to our Weekly Digest</h1>
        <h2>Sign up to learn about upcoming Data Science events.</h2>
      </div>

      <WeeklyDigestForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default WeeklyDigestPage;
