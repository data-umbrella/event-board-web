import React, { useState } from 'react';
// Third-party dependencies
import moment from 'moment';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Constants
import formStyleClasses from 'styles/forms';

// Components
import DatePickerField from 'components/elements/DatePickerField';
import EventTypeField from 'components/elements/EventTypeField';
import LanguageField from 'components/elements/LanguageField';
import CategoryField from 'components/elements/CategoryField';
import PriceField from 'components/elements/PriceField';
import RegionField from 'components/elements/RegionField';

function SearchFormComponent() {
  const [showFilters, setShowFilters] = useState(false);

  function toggleFilters () {
    setShowFilters(!showFilters);
  }

  return (
    <>
      <section className="flex justify-between items-end py-9 md:py-1.5">
        <h1 className="md:font-bold text-xl md:text-2xl">Search Events</h1>
        <h5 className="hidden md:block font-bold text-base text-du-purple-700">Post Event</h5>
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
                className={`${formStyleClasses.input} pl-10 focus:outline-none p1-10`}
                placeholder="Search"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="container mx-auto mb-4">
            <p>Popular searches: Python Online Rstats Django</p>
          </div>

          <label
            className="block font-bold py-3 hover:underline"
            onClick={toggleFilters}
          >
            Advanced Filter
          </label>

          <div className="expandable" aria-expanded={showFilters}>
            <div className={formStyleClasses.searchInputColumnsOne}>
              <div>
                <label>Start Date</label>
                <DatePickerField name="startDate" className={formStyleClasses.input} />
              </div>

              <div>
                <label>End Date</label>
                <DatePickerField name="endDate" className={formStyleClasses.input} />
              </div>

              <div>
                <EventTypeField />
              </div>

              <div>
                <CategoryField/>
              </div>
            </div>

            <div className={formStyleClasses.searchInputColumnsTwo}>
              <div>
                <LanguageField />
              </div>

              <div>
                <RegionField />
              </div>

              <div>
                <PriceField />
              </div>
            </div>

            <div className="text-right">
              <button
                className="p-2 text-black rounded mb-2 mr-2 font-semibold"
              >
                Clear Filters
              </button>

              <button
                type="submit"
                className="bg-du-purple-500 p-2 text-white rounded mb-2 mr-2 font-semibold"
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
