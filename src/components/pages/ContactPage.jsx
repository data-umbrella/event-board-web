import React from 'react';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import contact from 'src/assets/contact.png';
import contact from 'assets/contact-image.png';
import ContactTopicField from 'components/elements/ContactTopicField';

/**
 * Defines the form component for the contact page
 * @returns {React.Component} - returns a react component
 */
function ContactUsFormComponent() {
  return (
    <div className="container p-20 mb-10">
      <div>
        For feature suggestions, bug reports, etc. for the Event Board, please open up an issue here:
      </div>
      <div className="pt-5 pb-5">
        <a className={formStyleClasses.hyperlinks} href="/https://github.com/data-umbrella/event-board-web">
          https://github.com/data-umbrella/event-board-web
        </a>
      </div>

      <div className="pt-5 pb-5">
        <p>For inquiries related to sponsorship, technical issues, or other, please complete this form:</p>
      </div>

      <Form>
        <div className="grid grid-cols-2">
          <div className={`${formStyleClasses.inputContainer} col-span-1`}>
            <label className="block" htmlFor="name">
              Name*
            </label>
            <Field
              type="text"
              name="name"
              className={formStyleClasses.input}
            />
          </div>

          <div className={`${formStyleClasses.inputContainer} row-start-2`}>
            <label className="block" htmlFor="email">
              Email*
            </label>
            <Field
              type="email"
              name="email"
              className={formStyleClasses.input}
            />
          </div>

          <div className={`${formStyleClasses.inputContainer} row-start-2`}>
            <label className="block" htmlFor="name">Topic</label>
            <ContactTopicField/>
          </div>

          <div className={`${formStyleClasses.inputContainer} row-start-3 col-start-1 col-end-3`}>
            <label className="block" htmlFor="name">
              How did you find out about this Event Board?*
            </label>
            <Field
              type="text"
              name="reference"
              className={formStyleClasses.input}
            />
          </div>

          <div className={`${formStyleClasses.inputContainer} row-start-4 col-span-2`}>
            <label className="block" htmlFor="name">Message*</label>
            <Field
              type="text"
              name="message"
              className={formStyleClasses.textarea}
            />
          </div>

          <div className={`${formStyleClasses.inputContainer} row-start-5`}>
            <label>
              <Field type="checkbox" name="toggle" />&nbsp;
              All communication must adhere to our&nbsp;
              <a className={formStyleClasses.hyperlinks} href="/pages">
                Code of Conduct
              </a>*
            </label>
          </div>

          <div className={`actions row-start-6 col-start-2` }>
            <button type="submit" className={formStyleClasses.sendButton}>
              Send
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
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
    topic: props.topic || '',
    reference: props.reference || '',
    message: props.message || '',
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
  topic: Yup.string(),
  reference: Yup.string(),
  message: Yup.string().required('Field is required'),
});

/**
 * Wraps WeeklyDigestForm with the withFormik Higher-order component
 */
export const ContactUsForm = withFormik({
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(ContactUsFormComponent);

function ContactUsPage() {
  function handleSubmit() {

  }

  return (
    <div>
      <h1 className="text-3xl pt-8 pb-8">Contact Us</h1>
      <img src={contact} className="w-full mx-auto" alt="contact-us"/>
      <div>
      </div>
      <ContactUsForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default ContactUsPage;
