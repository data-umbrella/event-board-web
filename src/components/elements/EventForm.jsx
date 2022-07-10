// React dependencies
import { useNavigate } from 'react-router-dom';

// Third-party dependencies
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Constants
import usStates from 'constants/us-states';
import timezones from 'constants/timezones';
import timeSlots from 'constants/time-slots';
import { eventProperties } from 'constants/events';
import formStyleClasses from 'styles/forms';

// Components
import DatePickerField from 'components/elements/DatePickerField';
import ValidatedInput from 'components/elements/ValidatedInput';


function PostEventFormComponent({ touched, errors }) {
  return (
    <Form className="container mx-auto p-10 mb-10">
      <div className="pt-12 pb-12">
        <h1 className="text-4xl">Event Submission Form</h1>
        <p className="text-lg pl-0.5 pt-2 pb-2">Events can be submitted by anybody but will need to be approved by admins.</p>
      </div>

      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-1">
          <label>Upload Event Image</label>

          <div className="bg-zinc-400 p-20 rounded text-center">
            Photo
          </div>
        </div>

        <div className="col-span-2">
          <div className="pl-12 pb-12 ">
            <label>Enter Image URL</label>
            <Field name="imageUrl" type="text" className={formStyleClasses.input} />
          </div>

          <div className="pl-12">
            <label>Image Alt Text</label>
            <Field name="imageAltText" type="text" className={formStyleClasses.input}  />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 container mx-auto pt-6">
        <div>
          <div className="mb-6">
            <Field
              autoComplete="new-password"
              className={formStyleClasses.input}
              component={ValidatedInput}
              label="Name of Organization"
              name="organization"
              type="text"
            />
          </div>

          <div className="mb-6">
            <Field
              autoComplete="new-password"
              className={formStyleClasses.input}
              component={ValidatedInput}
              label="Event Name"
              name="eventName"
              type="text"
            />
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="pb-6">
              <label>Start Date</label>
              <DatePickerField name="startDate" className={formStyleClasses.input} />
            </div>

            <div className="pb-6">
              <label>End Date</label>
              <DatePickerField name="endDate" className={formStyleClasses.input} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 pb-6">
            <div className="pb-6">
              <label>Start Time</label>
              <Field name="startTime" component="select" className={formStyleClasses.select}>
                {timeSlots.map(timeSlot => {
                  return <option key={timeSlot} value={timeSlot}>{ timeSlot }</option>
                })}
              </Field>
            </div>

            <div className="pb-6">
              <label>End Time</label>
              <Field name="endTime" type="text" className={formStyleClasses.input}  />
            </div>
          </div>

          <div className="pb-6 w-1/2">
            <label>Time Zone</label>
            <Field name="timezone" component="select" className={formStyleClasses.select}>
              <option value={null}>Select a time zone</option>
              {timezones.map(({ name, abbreviation, text }) => {
                return <option key={text} value={text}>{name}</option>
              })}
            </Field>
          </div>

          <div className="grid grid-cols-5 gap-12 pb-6">
            <div className="col-span-3">
              <label>City</label>
              <Field name="city" type="text" className={formStyleClasses.input}  />
            </div>

            <div className="pb-6 col-span-2">
              <label>State</label>
              <Field name="state" component="select" className={formStyleClasses.select}>
                <option value={null}>Select a state</option>
                {usStates.map(({ name, abbreviation }) => {
                  return <option key={abbreviation} value={abbreviation}>{name}</option>
                })}
              </Field>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <label>Event Type</label>
            <Field name="eventType" component="select" className={formStyleClasses.select}>
              <option value="Tech Talk">Tech Talk</option>
              <option value="Speaker Panel">Speaker Panel</option>
            </Field>
          </div>

          <div className="mb-6 w-1/2">
            <label>CFP Deadline Date</label>
            <Field name="cfpDeadline" type="text" className={formStyleClasses.input}  />
          </div>

          <div className="mb-6 w-1/2">
            <label>Registration Start Date</label>
            <Field name="registrationStartDate" type="text" className={formStyleClasses.input}  />
          </div>

          <div className="mb-6 w-1/2">
            <label>Registration End Date</label>
            <Field name="registrationEndDate" type="text" className={formStyleClasses.input}  />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="description">Event Description</label>
        <Field
          component="textarea"
          id="description"
          name="description"
          className={formStyleClasses.textarea}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="description">Volunteering Notes</label>
        <Field
          component="textarea"
          id="volunteeringNotes"
          name="volunteeringNotes"
          className={formStyleClasses.textarea}
        />
      </div>

      <div className="grid grid-cols-2 w-1/2 float-right gap-1">
        <button className="p-2 underline">Clear Form</button>
        <button className={formStyleClasses.reviewButton} type="submit">Review</button>
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
  return Object.keys(eventProperties).reduce((accumulator, key) => {
    accumulator[key] = props[key] || eventProperties[key];
    return accumulator;
  }, {});
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
  organization: Yup.string().required('Field is required'),
  eventName: Yup.string().required('Field is required'),
});

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
export const PostEventForm = withFormik({
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(PostEventFormComponent);

export default NewEventPage;
