import React from 'react';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { postWeeklyDigestEmail } from 'services/weekly-digests';
import { ToastContainer, toast } from "react-toastify";
import { useState } from 'react'
import { set } from 'react-ga'

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
  const [subscribeError, setSubscribeError] = useState('')
  /**
 * Defines the toastify container when the user successfully submits their email.
 */
  const EmailSubscribeSuccessToastify = () => {
    toast(
      <div className="bg-white rounded-lg border-2 border-du-purple-500">
        <div className="float-right p-2">
          <button onClick={''}>X</button>
        </div>
        <div className="text-center rounded-lg py-8">
          <h2 className="font-bold text-xl">Thank you for signing up!</h2>
          <p>We are excited to share the latest with you. <br /> Our newsletters go out every Tuesday at 9am ET.</p>
        </div>
      </div>
    ), { toastId: "toast-id" }
  }

  function handleSubmit(values) {
    postWeeklyDigestEmail(values).then((response) => {
      if (response === true) {
        return (toast(<EmailSubscribeSuccessToastify />), setSubscribeError(''))
      } else {
        return setSubscribeError(response.email[0]) 
      }
    })
  }

  return (
    <div className="xs:mb-40 lg:mt-12 lg:mx-28 xl:mx-40">
      <ToastContainer />
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-lg md:pt-12 lg:text-4xl lg:pb-3 text-left lg:text-center">Subscribe to our Weekly Digest</h2>
        <h3 className="text-left lg:text-center">Sign up to learn about upcoming Data Science events.</h3>
      </div>
      <p className="pt-4 text-red-700 text-center">{subscribeError}</p>
      <WeeklyDigestForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default WeeklyDigestPage;
