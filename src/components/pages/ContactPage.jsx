import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import contactMobile from 'assets/contact-mobile.png'
import contact from 'assets/contact-image.png';
import ContactTopicField from 'components/elements/ContactTopicField';
import { postContactEmail } from 'services/contact-emails';

/**
 * Defines the form component for the contact page
 * @returns {React.Component} - returns a react component
 */
function ContactUsFormComponent() {
  return (
    <div className="container my-5 md:p-20 md:mb-10 text-sm md:text-xl">
      <section>
        <p className="pb-4">
          For feature suggestions, bug reports, etc. 
          for the Event Board, please open up an issue 
          here:
        </p>
        <a 
          className={formStyleClasses.hyperlinks} 
          href="https://github.com/data-umbrella/event-board-web"
        >
          https://github.com/data-umbrella/event-board-web
        </a>
      </section>

      <div className="pt-5 pb-5">
        <p>For inquiries related to sponsorship, technical issues, or other, please complete this form:</p>
      </div>

      <Form>
        <div className="grid grid-cols-2 space-y-2.5 md:space-y-5">
          <div className="col-span-2 md:col-span-1">
            <label className="block" htmlFor="name">
              Name*
            </label>
            <Field
              type="text"
              name="name"
              className={`${formStyleClasses.input} border-black`}
            />
          </div>

          <div className="row-start-2">
            <label className="block" htmlFor="email">
              Email*
            </label>
            <Field
              type="email"
              name="email"
              className={`${formStyleClasses.input} border-black`}
            />
          </div>

          <div className="row-start-2 ml-4">
            <label className="block" htmlFor="name">Topic</label>
            <ContactTopicField/>
          </div>

          <div className="row-start-3 col-start-1 col-end-3">
            <label className="block" htmlFor="name">
              How did you find out about this Event Board?*
            </label>
            <Field
              type="text"
              name="reference"
              className={`${formStyleClasses.input} border-black`}
            />
          </div>

          <div className="row-start-4 col-span-2">
            <label className="block" htmlFor="name">Message*</label>
            <Field
              component="textarea"
              name="message"
              className={`${formStyleClasses.textarea} border-black`}
            />
          </div>

          <div className="row-start-5 col-span-2">
            <label>
              <Field type="checkbox" name="toggle" />&nbsp;
              All communication must adhere to our&nbsp;
              <Link to="/codeofconduct" className="underline" >
                Code of Conduct
              </Link>*
            </label>
          </div>

          <div className="actions row-start-6 col-start-2">
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
  const navigate = useNavigate();

  async function handleSubmit(values) {
    const responseSuccess = await postContactEmail(values);

    if (responseSuccess) {
      navigate('/contact-success');
    } else {
      // TODO: Add error handling
      window.alert('Something went wrong');
    }
  }

  return (
    <div>
      <h1 className="text-xl md:text-3xl py-4 md:py-8">Contact Us</h1>
      <img src={contact} className="hidden md:block w-full mx-auto px-4" alt="contact-us"/>
      <img src={contactMobile} className="md:hidden w-full mx-auto" alt="contact-mobile"/>
      <ContactUsForm handleFormSubmit={handleSubmit} />
    </div>
  )
}

export default ContactUsPage;
