// Third-party dependencies
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Constants
import timezones from 'constants/timezones';
import { eventProperties } from 'constants/events';
import formStyleClasses from 'styles/forms';

// Components
import DatePickerField from 'components/elements/DatePickerField';
import ValidatedInput from 'components/elements/ValidatedInput';
import EventTypeField from 'components/elements/EventTypeField';
import DiscountField from 'components/elements/DiscountField';
import AccessibilityDetailField from 'components/elements/AccessibilityDetailField';
import SpeakersField from 'components/elements/SpeakersField';
import LanguageField from 'components/elements/LanguageField';
import TextField from 'components/elements/TextField';
import CitySelect from 'components/elements/CitySelect';
import TimeSlotField from 'components/elements/TimeSlotField';
import SocialMediaField from 'components/elements/SocialMediaField';


function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);

  return (res !== null);
}

function ImagePreview({ url }) {
  if (!isValidURL(url)) return (
    <div className="text-center mt-12">Add Image</div>
  )

  return <img src={url} alt="preview" />
}

function PostEventFormComponent(props) {
  const { values, setFieldValue } = props;

  return (
    <Form className="container mx-auto pl-10 pr-10 mb-10 pb-10">
      <div className="pt-12 pb-12">
        <h1 className="text-4xl">Event Submission Form</h1>
        <p className="text-lg pl-0.5 pt-2 pb-2">
          Events can be submitted by anybody but will need to be approved by admins.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-24 bg-white rounded border border-slate-300 p-6">
        <div className="col-span-1 rounded">
          <ImagePreview url={values.imageUrl} />
        </div>
        <div className="col-span-2 rounded">
          <div className="mb-6">
            <label>Enter Image URL</label>
            <Field
              name="imageUrl"
              type="text"
              className={formStyleClasses.input}
              autoComplete="new-password"
            />
          </div>

          <div className="mb-6">
            <label>Image Alt Text</label>
            <Field
              name="imageAltText"
              type="text"
              className={formStyleClasses.input}
              autoComplete="new-password"
            />
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
              label="Event Title"
              name="title"
              type="text"
              id="title"
            />
          </div>

          <div className="mb-6">
            <Field
              autoComplete="new-password"
              className={formStyleClasses.input}
              component={ValidatedInput}
              label="Organization Name"
              name="organizationName"
              type="text"
              id="organizationName"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="pb-6">
              <label>Start Date</label>
              <DatePickerField name="startDate" className={formStyleClasses.input} />
            </div>

            <div className="pb-6">
              <label>End Date</label>
              <DatePickerField name="endDate" className={formStyleClasses.input} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pb-6">
            <div className="">
              <label>Time Zone</label>
              <Field name="timezone" component="select" className={formStyleClasses.select}>
                <option value={null}>Select a time zone</option>
                {timezones.map(({ name, abbreviation, text }) => {
                  return <option key={text} value={text}>{name}</option>
                })}
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1">
                <TimeSlotField id="startTime" name="startTime" label="Start Time" />
              </div>

              <div className="col-span-1">
                <TimeSlotField id="endTime" name="endTime" label="End Time" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <CitySelect />
          </div>

          <div className="mb-6">
            <label htmlFor="codeOfConductUrl">
              Code Of Conduct URL
            </label>
            <Field
              autoComplete="new-password"
              id="codeOfConductUrl"
              name="codeOfConductUrl"
              className={formStyleClasses.input}
            />
          </div>
        </div>

        <div className="">
          <div className="mb-6">
            <label htmlFor="organizationUrl">
              Organization URL
            </label>
            <Field
              autoComplete="new-password"
              id="organizationUrl"
              name="organizationUrl"
              className={formStyleClasses.input}
            />
          </div>

          <div className="mb-6">
            <EventTypeField />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="">
              <label>CFP Deadline Date</label>
              <Field
                name="cfpDeadline"
                type="text"
                className={formStyleClasses.input}
              />
            </div>

            <div className="">
              <LanguageField />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="mb-6">
              <label>Registration Start Date</label>
              <DatePickerField name="registrationStartDate" className={formStyleClasses.input} />
            </div>

            <div className="mb-6">
              <label>Registration End Date</label>
              <DatePickerField name="registrationEndDate" className={formStyleClasses.input} />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="eventRegistrationUrl">
              Event Registration URL
            </label>
            <Field
              autoComplete="new-password"
              id="eventRegistrationUrl"
              name="eventRegistrationUrl"
              className={formStyleClasses.input}
            />
          </div>

          <div className="mb-6">
            <DiscountField />
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
        <SpeakersField value={values.speakers} onChange={setFieldValue} />
      </div>

      <div>
        <SocialMediaField value={values.socialMediaLinks} onChange={setFieldValue} />
      </div>

      <div className="mb-6">
        <label className="block font-bold mb-2">Notes</label>

        <div className="grid grid-cols-2 gap-6 bg-white rounded p-4">
          <div className="">
            <TextField
              component="textarea"
              id="notes"
              name="notes"
              className={formStyleClasses.textarea}
              label="Event Notes"
            />
          </div>

          <div className="">
            <TextField
              component="textarea"
              id="volunteeringNotes"
              name="volunteeringNotes"
              className={formStyleClasses.textarea}
              label="Volunteering Notes"
            />
          </div>
        </div>
      </div>

      <div className="pt-6 pb-6">
        <AccessibilityDetailField
          value={values.accessibilityDetails}
          onChange={setFieldValue}
        />
      </div>

      <div className="grid grid-cols-2 w-1/2 float-right gap-1">
        <button className="p-2 underline">Clear Form</button>
        <button className={formStyleClasses.reviewButton} type="submit">
          Review
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
  const defaultValues = props.defaultValues || {}

  return Object.keys(eventProperties).reduce((accumulator, key) => {
    accumulator[key] = props[key] || defaultValues[key] || eventProperties[key];
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
  organizationName: Yup.string().required('Field is required'),
  title: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
});

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
const EventForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(PostEventFormComponent);

export default EventForm;
