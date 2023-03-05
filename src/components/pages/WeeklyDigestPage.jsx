import React, { useState } from 'react';
import formStyleClasses from 'styles/forms';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { postWeeklyDigestEmail, updateWeeklyDigestEmail } from 'services/weekly-digests';
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from 'hooks/authentication';



/**
 * Defines the form component for the weekly digest
 * @returns {React.Component} - returns a react component
 */
function WeeklyDigestFormComponent( { errors, touched } ) {
  return (
    <Form className="container mx-auto my-8 text-center">
      <div className="grid grid-rows-2 md:grid-cols-3 md:grid-rows-2">
        <label className="col-span-3 pt-8 text-left" htmlFor="email">
          Email address
          {touched.email && errors.email && 
              <span className="px-2 inline-block text-[#FB2F2F] dark:text-[#FB2F2F] text-sm">
                {errors.email}
              </span> 
          }
        </label>
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
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .required("Email is required")
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
  const [subscribedStatus, setSubscribedStatus] = useState('')
  const { currentUser, refetchUser } = useAuth();
  const { isAuthenticated } = currentUser;

  const isSubscribed = currentUser.weeklyDigest ? currentUser.weeklyDigest.subscribed : false;
  /**
 * Defines the toastify container when the user successfully submits their email.
 */
  const EmailSubscribeSuccessToastify = () => {
    toast(
      <div className="bg-white rounded-lg border-2 border-du-purple-500">
        <div className="text-center rounded-lg py-8">
          <h2 className="font-bold text-xl dark:text-black">Thank you for signing up!</h2>
          <p className="dark:text-black">We are excited to share the latest with you. <br /> Our newsletters go out every Tuesday at 9am ET.</p>
        </div>
      </div>
    )
  }

  async function updateSubscription() {
    // if user exists, but has no existing weekly digest, create a new one with post
    const toggled_subscribed_status = currentUser.weeklyDigest ? currentUser.weeklyDigest.subscribed ? "False" : "True" : "True";
    if(!currentUser.weeklyDigest) return handleSubmit({ "email": currentUser.email, "subscribed": toggled_subscribed_status })
    
    // if user exists but already has an existing weekly digest, update existing one with patch/update
    const res = await updateWeeklyDigestEmail({ "subscribed": toggled_subscribed_status, "id": currentUser.weeklyDigest.id })
    if(!res) console.log(currentUser.email, res) 
    
    refetchUser()
  }

  async function handleSubmit(values) {
    const res = await postWeeklyDigestEmail({ "email": values.email, "subscribed": "True" })
    if(!res) return setSubscribedStatus(res.email[0]) 
    
    toast(EmailSubscribeSuccessToastify)
    setSubscribedStatus('')
    setTimeout(() => {
      location.reload();
    }, 10000)
  }
  return (
    <>
      <ToastContainer />
      <div className="xs:mb-40 lg:mt-12 lg:mx-28 xl:mx-40">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-lg md:pt-12 lg:text-4xl lg:pb-3 text-left lg:text-center">Subscribe to our Weekly Digest</h2>
          <h3 className="text-left lg:text-center">Sign up to learn about upcoming Data Science events.</h3>
        </div>  
        <p className="pt-4 text-red-700 text-center">{subscribedStatus}</p>
        <div className="text-center">
          {currentUser.weeklyDigest && currentUser.weeklyDigest.subscribed === true && (
            <>
              <p className="text-red-700">You are already subscribed. Unsubscribe?</p>
              <button className="px-4 py-4 mt-2 font-semibold text-sm text-white rounded-md shadow-sm bg-du-purple-500" onClick={updateSubscription}>Unsubscribe</button>
            </>
          )}
          {
            isSubscribed === false && isAuthenticated && (
              <>
                <button className="px-4 py-4 mt-2 font-semibold text-sm text-white rounded-md shadow-sm bg-du-purple-500" onClick={updateSubscription}>Subscribe</button>
              </>
            )
          }
        </div>
        
        {isSubscribed === false && !isAuthenticated &&
          <WeeklyDigestForm handleSubmit={handleSubmit} />
        }
      </div>
    </>
  )
}

export default WeeklyDigestPage;
