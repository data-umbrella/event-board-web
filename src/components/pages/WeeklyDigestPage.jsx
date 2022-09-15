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
    <Form className="container mx-auto my-8 text-center">
        <div className="grid grid-rows-2 md:grid-cols-3 md:grid-rows-2">
            <label className="pt-8 text-left" htmlFor="email">Email address</label>
            <Field
              type="email"
              name="email"
              className={formStyleClasses.input}
            />
          <button
            type="submit"
            className="md:row-start-2 md:cols-start-2 md:m-0 md:mx-10 px-4 py-4 mt-2 font-semibold text-sm text-white rounded-md shadow-sm bg-du-purple-500"
          >
            Subscribe
          </button>
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
  props.handleSubmit(values);
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
  function handleSubmit(values) {
    // TODO: submit form to server
    console.log('submit', values); // eslint-disable-line no-console
  }

  return (
    <div className="xs:mb-40 lg:mt-12 lg:mx-28 xl:mx-40">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-lg md:pt-12 lg:text-4xl lg:pb-3 text-left lg:text-center">Subscribe to our Weekly Digest</h2>
        <h3 className="text-left lg:text-center">Sign up to learn about upcoming Data Science events.</h3>
      </div>
      <WeeklyDigestForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default WeeklyDigestPage;
