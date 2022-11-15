import React from "react";

// Third-party dependencies
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

// Constants
import timezones from "constants/timezones";
import { eventProperties } from "constants/events";
import formStyleClasses from "styles/forms";

// Components
import DatePickerField from "components/elements/DatePickerField";
import ValidatedInput from "components/elements/ValidatedInput";
import ValidatedTextArea from "./ValidatedTextArea";
import EventTypeField from "components/elements/EventTypeField";
import DiscountField from "components/elements/DiscountField";
import AccessibilityDetailField from "components/elements/AccessibilityDetailField";
import SpeakersField from "components/elements/SpeakersField";
import LanguageField from "components/elements/LanguageField";
import TextField from "components/elements/TextField";
import CitySelect from "components/elements/CitySelect";
import TimeSlotField from "components/elements/TimeSlotField";
import EventHashtagField from "./EventHashtagField";
// import SocialMediaField from 'components/elements/SocialMediaField';
import ImagePreview from "components/elements/ImagePreview";
import { imageFileToDataURL } from "utils/files";
import FeaturedEventField from "./FeaturedEventField";

function PostEventFormComponent(props) {
  const { values, setFieldValue } = props;
  console.log("props", props.values);
  async function handleImageChange(e) {
    const imageFile = e.target.files[0];
    setFieldValue("imageFile", await imageFileToDataURL(imageFile));
  }

  return (
    <Form className="container mx-auto grid gap-6 p-0 md:mb-10 md:px-10 md:pb-10">
      <section className="pt-6">
        <h1 className="text-2xl font-bold md:text-4xl">
          Event Submission Form
        </h1>
        <p className="text-md py-2 pl-0.5 md:text-lg">
          Events can be submitted by anybody but will need to be approved by
          admins.
        </p>
      </section>
      {/* Organization details section */}
      <section>
        <h2 className="pb-4 text-xl font-bold md:text-2xl">
          Organization Details
        </h2>
        <section className={formStyleClasses.organizationDetail}>
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
            <label htmlFor="organizationUrl">Organization URL</label>
            <Field
              autoComplete="new-password"
              id="organizationUrl"
              name="organizationUrl"
              className={formStyleClasses.input}
            />
            {/* <SocialMediaField value={values.socialMediaLinks} onChange={setFieldValue} /> */}
          </section>
        </section>
      </section>

      {/* Event Details Section */}
      <section>
        <h2 className="pb-4 text-xl font-bold md:text-2xl">Event Details</h2>
        <section className="rounded border border-slate-300 bg-white p-6 dark:bg-transparent dark:border-teal-400">
          <section className="flex flex-col">
            <div className="max-w-sm pb-4">
              <Field
                autoComplete="new-password"
                className={formStyleClasses.input}
                component={ValidatedInput}
                label="Event Name*"
                name="eventName"
                type="text"
                id="eventName"
              />
            </div>
            <div>
              <Field
                component={ValidatedTextArea}
                type="textarea"
                id="description"
                name="description"
                label="Event Description*"
                className={formStyleClasses.textarea}
              />
            </div>
          </section>
          <section className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2">
            <section className="grid gap-6">
              <section className="grid grid-cols-2 gap-6">
                <DatePickerField
                  name="startDate"
                  className={formStyleClasses.input}
                  label="Start Date*"
                />

                <DatePickerField
                  name="endDate"
                  label="End Date*"
                  className={formStyleClasses.input}
                />
              </section>

              <section className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                  <TimeSlotField
                    id="startTime"
                    name="startTime"
                    label="Start Time*"
                  />
                </div>

                <div className="col-span-1">
                  <TimeSlotField
                    id="endTime"
                    name="endTime"
                    label="End Time*"
                  />
                </div>
              </section>
              <section>
                <label>Time Zone*</label>
                <Field
                  name="timezone"
                  component="select"
                  className={formStyleClasses.select}
                >
                  <option value={null}>Select a time zone</option>
                  {timezones.map(({ name, text }) => {
                    return (
                      <option key={text} value={text}>
                        {name}
                      </option>
                    );
                  })}
                </Field>
              </section>
              <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
                  <DatePickerField
                    name="registrationStartDate"
                    className={formStyleClasses.input}
                  />
                </div>
              </section>
              <section className="grid grid-cols-2 gap-6">
                <div>
                  <label>Registration Start Date</label>
                  <DatePickerField
                    name="registrationStartDate"
                    className={formStyleClasses.input}
                  />
                </div>
              </section>
              <section
                role="group"
                aria-labelledby="virtual-option-radio-group"
              >
                <div>
                  <label className="mr-6">
                    <Field
                      name="in-person"
                      type="radio"
                      value="in-person"
                      className={formStyleClasses.radioButtonValues}
                    />
                    In-person
                  </label>
                  <label className="mr-6">
                    <Field
                      name="in-person"
                      type="radio"
                      value="virutal"
                      className={formStyleClasses.radioButtonValues}
                    />
                    Virtual
                  </label>
                  <label className="mr-6">
                    <Field
                      name="in-person"
                      type="radio"
                      value="both"
                      className={formStyleClasses.radioButtonValues}
                    />
                    Both
                  </label>
                </div>
              </section>
            </section>
            <section>
              <div
                className="border-1 col-span-2 grid place-content-center rounded border border-black pt-2 text-center dark:border-teal-400 md:col-span-1"
                style={{
                  minHeight: "6rem",
                  minWidth: "6rem",
                }}
              >
                <ImagePreview url={values.imageFile} />
              </div>

              <div className="col-span-2 rounded py-6">
                <div className="mb-6 h-16">
                  <label>Upload Image</label>
                  <br />
                  <input
                    style={{ maxWidth: "80%" }}
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

                <div className="container mx-auto mb-4">
                  <label>Tags</label>
                  <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="submit"
                        className={`
                          p-1
                          focus:outline-none
                          focus:shadow-outline
                          text-du-purple-500
                          font-bold
                        `}
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>

                    <Field
                      type="search"
                      name="search"
                      className={`${formStyleClasses.searchInput} pl-10 focus:outline-none`}
                      placeholder="Search"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <EventHashtagField
                    value={values.hashtags}
                    onChange={(...args) => {
                      console.log("value coming out of change event", args);
                      return setFieldValue(...args);
                    }}
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
        <h2 className="pb-4 text-xl font-bold md:text-2xl">Notes</h2>
        <div className="grid grid-cols-1 gap-6 rounded border border-zinc-300 bg-white p-4 dark:bg-transparent dark:border-teal-400 md:grid-cols-2">
          <div>
            <TextField
              component="textarea"
              id="notes"
              name="notes"
              className={formStyleClasses.textarea}
              label="Event Notes"
            />
          </div>

          <div>
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
        <h2 className="pb-4 text-xl font-bold md:text-2xl">Other</h2>
        <section className="grid gap-6 rounded border border-zinc-300 bg-white p-4 dark:bg-transparent dark:border-teal-400 md:grid-cols-2">
          <div>
            <div className="mb-6">
              <label htmlFor="codeOfConductUrl">Code Of Conduct URL</label>
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
        <h2 className="pb-4 text-xl font-bold md:text-2xl">Accessibility</h2>
        <section className="grid gap-6 rounded border border-zinc-300 bg-white p-4 dark:bg-transparent dark:border-teal-400">
          <AccessibilityDetailField
            value={values.accessibilityOptions}
            onChange={setFieldValue}
          />
        </section>
      </section>

      {/* Featured Event section */}
      <section>
        <h2 className="pb-4 text-xl font-bold md:text-2xl">Featured Event</h2>
        <section className="grid gap-6 rounded border border-zinc-300 bg-white p-4 dark:bg-transparent dark:border-teal-400">
          <FeaturedEventField
            value={values.featured}
            onChange={setFieldValue}
          />
        </section>
      </section>

      <section className="mb-6 grid gap-1 md:grid-rows-1 md:justify-end">
        <div className="grid grid-cols-1 md:block">
          <button className="p-2 mr-2 underline dark:text-white">
            Clear Form
          </button>
          <button className={formStyleClasses.reviewButton} type="submit">
            Review
          </button>
        </div>
      </section>
    </Form>
  );
}

/**
 * Defines a function to map Formik props to form values
 * Function name matches Formik option key mapPropsToValues
 * @param {} props - includes email and password
 * @returns {object} - formatted field values
 */
export function mapPropsToValues(props) {
  const defaultValues = props.defaultValues || {};

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
  eventName: Yup.string().required("Field is required"),
  description: Yup.string().required("Field is required"),
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
