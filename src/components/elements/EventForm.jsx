import React from 'react';

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
import ImagePreview from 'components/elements/ImagePreview';
import { imageFileToDataURL } from 'utils/files';
import FeaturedEventField from './FeaturedEventField';

function PostEventFormComponent(props) {
  const { values, setFieldValue } = props;

  async function handleImageChange (e) {
    const imageFile = e.target.files[0];
    setFieldValue('imageFile', await imageFileToDataURL(imageFile));
  }

  return (
    <Form className="container grid mx-auto p-0 md:px-10 md:mb-10 md:pb-10 gap-6">
      <section className="pt-6">
        <h1 className="text-2xl font-bold md:text-4xl">Event Submission Form</h1>
        <p className="text-md md:text-lg pl-0.5 pt-2 pb-2">
          Events can be submitted by anybody but will need to be approved by admins.
        </p>
      </section>
      {/* Organization details section */}
      <section>
        <h2 className="text-xl md:text-2xl pb-4 font-bold font-bold">Organization Details</h2>
        <section
          className="bg-white dark:bg-transparent rounded border border-slate-300 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-6 p-6 marker:mb-6"
        >
          <Field  
            autoComplete="new-password"
            className={formStyleClasses.input}
            component={ValidatedInput}
            label="Organization Name"
            name="organizationName"
            type="text"
            id="organizationName"
          />
          <section className="mt-4 md:mt-0">
            <label htmlFor="organizationUrl">
              Organization URL
            </label>
            <Field
              autoComplete="new-password"
              id="organizationUrl"
              name="organizationUrl"
              className={formStyleClasses.input}
            />
            <SocialMediaField value={values.socialMediaLinks} onChange={setFieldValue} />
          </section>
          
        </section>
      </section>

      {/* Event Details Section */}
      <section>
        <h2 className="text-xl md:text-2xl pb-4 font-bold">Event Details</h2>
        <section className="bg-white dark:bg-transparent rounded border border-slate-300 p-6">
          <section className="flex flex-col">
            <div className="pb-4 max-w-sm">
              <Field
                autoComplete="new-password"
                className={formStyleClasses.input}
                component={ValidatedInput}
                label="Event Name"
                name="eventName"
                type="text"
                id="eventName"
              />
            </div>
            <div>
              <label htmlFor="description">Event Description</label>
              <Field
                component="textarea"
                id="description"
                name="description"
                className={formStyleClasses.textarea}
              />
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
            <section className="grid gap-6">
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <label>Start Date</label>
                  <DatePickerField name="startDate" className={formStyleClasses.input} />
                </div>

                <div>
                  <label>End Date</label>
                  <DatePickerField name="endDate" className={formStyleClasses.input} />
                </div>
              </section>
              <section className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  <TimeSlotField id="startTime" name="startTime" label="Start Time" />
                </div>

                <div className="col-span-1">
                  <TimeSlotField id="endTime" name="endTime" label="End Time" />
                </div>
              </section>
              <section>
                <label>Time Zone</label>
                <Field name="timezone" component="select" className={formStyleClasses.select}>
                  <option value={null}>Select a time zone</option>
                  {timezones.map(({ name, text }) => {
                    return <option key={text} value={text}>{name}</option>
                  })}
                </Field>
              </section>
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <CitySelect />
              </section>
              <section>
                <LanguageField />
              </section>
              <section>
                <EventTypeField />
              </section>
              <section>
                <label>CFP Deadline Date</label>
                <Field
                  name="cfpDeadline"
                  type="text"
                  className={formStyleClasses.input}
                />
              </section>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <label>Registration Start Date</label>
                  <DatePickerField name="registrationStartDate" className={formStyleClasses.input} />
                </div>
              </section>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <label>Registration End Date</label>
                  <DatePickerField name="registrationEndDate" className={formStyleClasses.input} />
                </div>
              </section>
            </section>
            <section>
              <div
                className="grid col-span-2 md:col-span-1 border border-1 border-black dark:border-teal-400 rounded text-center place-content-center"
                style={{
                  minHeight: '6rem',
                  minWidth: '6rem'
                }}
              >
                <ImagePreview url={values.imageFile} />
              </div>

              <div className="col-span-2 rounded py-6">
                <div className="mb-6">
                  <label>Upload Image</label>
                  <br/>
                  <input
                    style={{ maxWidth: "80%"}}
                    type="file"
                    name="imageFile"
                    id="image"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
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

                <div className="mb-6">
                  <label>Enter Image URL</label>
                  <Field
                    name="imageUrl"
                    type="text"
                    className={formStyleClasses.input}
                    autoComplete="new-password"
                  />
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>

      {/* Speakers section */}
      <section>
        <SpeakersField value={values.speakers} onChange={setFieldValue} />
      </section>

      {/* Notes section */}
      <section>
        <h2 className="text-xl md:text-2xl pb-4 font-bold font-bold">Notes</h2>
        <div className="grid grid-cols-2 gap-6 bg-white dark:bg-transparent rounded p-4 border border-zinc-300">
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
      </section>

      {/* Other section */}
      <section>
        <h2 className="text-xl md:text-2xl pb-4 font-bold font-bold">Other</h2>
        <section className="grid md:grid-cols-2 gap-6 bg-white dark:bg-transparent rounded p-4 border border-zinc-300">
          <div>
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
          </div>
          <DiscountField />
        </section>
      </section>

      {/* Accessibility Options section */}
      <section>
        <h2 className="text-xl md:text-2xl pb-4 font-bold font-bold">Accessibility</h2>
        <section className="grid gap-6 bg-white dark:bg-transparent rounded p-4 border border-zinc-300">
          <AccessibilityDetailField
            value={values.accessibilityOptions}
            onChange={setFieldValue}
          />
        </section>
      </section>

      {/* Featured Event section */}
      <section>
        <h2 className="text-xl md:text-2xl pb-4 font-bold font-bold">Featured Event</h2>
        <section className="grid gap-6 bg-white dark:bg-transparent rounded p-4 border border-zinc-300">
          <FeaturedEventField
            value={values.featured}
            onChange={setFieldValue}
          />
        </section>
      </section>

      <section className="grid md:grid-rows-1 md:justify-end gap-1 mb-6">
        <div className="grid grid-cols-1 md:block">
          <button className="p-2 underline dark:text-white">Clear Form</button>
          <button className={formStyleClasses.reviewButton} type="submit">
            Review
          </button>
        </div>
      </section>
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
  eventName: Yup.string().required('Field is required'),
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
