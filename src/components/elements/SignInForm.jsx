import React from 'react';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from 'hooks/authentication';

// TODO: Use the touched, errors props to implement validations
function BaseSignInForm () {
  return (
    <div className="flex justify-center">
      <Form className="lg:basis-1/2">
        <div className={formStyleClasses.inputContainer}>
          <label className="block" htmlFor="email">Email address</label>
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
            className={formStyleClasses.loginButton}
          >
            Login
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
});

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
const SignInFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(BaseSignInForm);

function SignInForm () {
  const navigate = useNavigate();
  const auth = useAuth();

  async function handleFormSubmit(values) {
    auth.sendMagicLink(values.email, (success, error) => {
      if (success) {
        navigate('/registration/confirmation');
      } else {
        // TODO: Handle error cases gracefully.
        window.alert(error);
      }
    });
  }

  return (
    <SignInFormWithFormik handleFormSubmit={handleFormSubmit} />
  )
}

export default SignInForm;
