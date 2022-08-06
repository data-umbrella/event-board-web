import React from 'react';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { API_URL } from 'constants/urls';
import * as Yup from 'yup';

// TODO: Use the touched, errors props to implement validations
function BaseSignUpForm () {
  return (
    <div className="flex justify-center">
      <Form className="basis-1/2">
        <div className={formStyleClasses.inputContainer}>
          <label className="block" htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            autoComplete="off"
            className={formStyleClasses.input}
          />
        </div>

        <div className={formStyleClasses.inputContainer}>
          <label className="block" htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            autoComplete="off"
            className={formStyleClasses.input}
          />
        </div>

        <div className={formStyleClasses.inputContainer}>
          <button
            type="submit"
            className={formStyleClasses.button}
          >
            Create Account
          </button>
        </div>
      </Form>
    </div>
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
    name: props.name || '',
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
  name: Yup.string().required('Field is required'),
});

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
const SignUpFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(BaseSignUpForm);

function SignUpForm () {
  const navigate = useNavigate();

  async function handleFormSubmit(values) {
    const response = await fetch(`${API_URL}/auth/email/`, {
      method: 'POST',
      body: JSON.stringify({ email: values.email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      navigate('/registration/confirmation');
    } else {
      // TODO: Handle error cases gracefully.
      window.alert('Something went wrong!');
    }
  }

  return (
    <SignUpFormWithFormik handleFormSubmit={handleFormSubmit} />
  )
}

export default SignUpForm;
