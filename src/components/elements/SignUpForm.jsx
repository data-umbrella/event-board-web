import React from 'react';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from 'hooks/authentication';

// TODO: Use the touched, errors props to implement validations
function BaseSignUpForm() {
  return (
    <div className="flex justify-center">
      <Form className="lg:basis-1/2">
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
          <label>
            <Field className="mr-2" type="checkbox" name="acceptedTerms" />
            <span className="mr-1">I agree with</span>
            <Link className={formStyleClasses.hyperlinks} to="/terms-and-conditions">
              Terms & Conditions
            </Link>
          </label>
        </div>

        <div className={formStyleClasses.inputContainer}>
          <button
            type="submit"
            className={formStyleClasses.button}
          >
            Sign up
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
export function mapPropsToValues(props) {
  return {
    email: props.email || '',
    acceptedTerms: props.acceptedTerms || false,
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
  acceptedTerms: Yup.boolean().oneOf([true], 'This field must be checked'),
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

function SignUpForm() {
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
    <SignUpFormWithFormik handleFormSubmit={handleFormSubmit} />
  )
}

export default SignUpForm;
