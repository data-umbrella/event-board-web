import React from 'react';
import { Link } from 'react-router-dom';
// Third-party dependencies
import moment from 'moment';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Constants
import formStyleClasses from 'styles/forms';

// Components
import DatePickerField from 'components/elements/DatePickerField';
import EventTopicField from 'components/elements/EventTopicField';
import EventTypeField from 'components/elements/EventTypeField';
import LanguageField from 'components/elements/LanguageField';
import PriceField from 'components/elements/PriceField';
import RegionField from 'components/elements/RegionField';

function SearchFormComponent() {
  return (
    <>
      <section className="flex justify-between items-end py-9 md:py-1.5">
        <h1 className="md:font-bold text-xl md:text-2xl">
          Search Events
        </h1>
        <Link 
          to="/events/new" 
          className="hidden md:block font-bold text-base text-du-purple-700 dark:text-[#C86DFF]"
        >
          Post Event
        </Link>
      </section>
      <Form className={formStyleClasses.searchInputGroup}>
        <div className="px-10">
          <div className="container mx-auto mb-4">
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

          <label className="md:hidden my-3">
            Filter by:
          </label>

          <label className="hidden md:block font-bold py-3">
            Advanced Filters
          </label>

          <div>
            <div className={formStyleClasses.searchInputColumnsOne}>
              <DatePickerField name="startDate" label="Start Date" className={formStyleClasses.searchInput} />
              <DatePickerField name="endDate" label="End Date" className={formStyleClasses.searchInput} />
              <EventTypeField />
              <EventTopicField/>
            </div>

            <div className={formStyleClasses.searchInputColumnsTwo}>
              <LanguageField />
              <RegionField />
              <PriceField />
            </div>

            <div className="text-right">
              <button
                className="p-2 text-black rounded mb-2 mr-2 font-semibold dark:text-white"
              >
                Clear Filters
              </button>

              <button
                type="submit"
                className="bg-du-purple-500 p-2 text-white rounded mb-2 mr-2 h-12 w-36 font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
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
    search: props.search || '',
    startDate: props.startDate || moment().format('MM/DD/YYYY'),
    endDate: props.endDate || moment().add(6, 'months').format('MM/DD/YYYY'),
    price: props.price || '',
    eventType: props.eventType || '',
    topic: props.topic || '',
    language: props.language || '',
    region: props.region || '',
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
export const validationSchema = Yup.object().shape({});

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
const SearchForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(SearchFormComponent);

export default SearchForm;
