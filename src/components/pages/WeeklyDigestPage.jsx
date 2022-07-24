import formStyleClasses from 'styles/forms';
import CitySelect from 'components/elements/CitySelect';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

/**
 * Defines the form component for the weekly digest
 * @returns {React.Component} - returns a react component
 */
function WeeklyDigestFormComponent() {
  return (
    <Form>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div className={formStyleClasses.inputContainer}>
            <label className="block" htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              autoComplete="new-password"
              className={formStyleClasses.input}
            />
          </div>

          <div className={formStyleClasses.inputContainer}>
            <label className="block" htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              className={formStyleClasses.input}
            />
          </div>

          <div className={formStyleClasses.inputContainer}>
            <CitySelect />
          </div>
        </div>

        <div className="col-span-2">

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
    name: props.name || '',
    email: props.email || '',
    city: props.city || '',
    state: props.state || '',
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
  name: Yup.string().required('Field is required'),
  email: Yup.string().required('Field is required'),
  city: Yup.string().required('Field is required'),
  state: Yup.string().required('Field is required'),
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
    <div>
      <div className="container mx-auto p-12">
        <h1 className="font-bold text-3xl">Subscribe to Data Umbrella’s Events Weekly Digest</h1>
        <h2>Sign up to learn about upcoming events.</h2>
      </div>

      <WeeklyDigestForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default WeeklyDigestPage;
