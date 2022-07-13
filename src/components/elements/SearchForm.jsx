// Third-party dependencies
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

import moment from 'moment';

function SearchFormComponent() {
  return (
    <Form className={formStyleClasses.searchInputGroup}>
      <div className="p-10">
        <div className="container mx-auto mb-4">
          <Field
            autoComplete="new-password"
            type="text"
            placeholder="Data Science"
            className={formStyleClasses.input}
            name="search"
          />
        </div>

        <div className="container mx-auto mb-4">
          <p>Popular searches: Python Online Rstats Django</p>
        </div>

        <label className="block font-bold mb-4">Filter By:</label>

        <div className={formStyleClasses.searchInputColumns}>
          <div>
            <label>Start Date</label>
            <DatePickerField name="startDate" className={formStyleClasses.input} />
          </div>

          <div>
            <label>End Date</label>
            <DatePickerField name="endDate" className={formStyleClasses.input} />
          </div>

          <div>
            <LanguageField />
          </div>

          <div>
            <label htmlFor="region">Region</label>
            <Field name="region" type="text" className={formStyleClasses.input} />
          </div>
        </div>

        <div className={formStyleClasses.searchInputColumns}>
          <div>
            <EventTypeField />
          </div>

          <div>
            <CategoryField/>
          </div>

          <div>
            <PriceField />
          </div>
        </div>
      </div>

      <div className="text-right">
        <button className="p-2 text-black rounded mb-2 mr-2 font-semibold">Clear Filters</button>
        <button type="submit" className="bg-purple-500 p-2 text-white rounded mb-2 mr-2 font-semibold">Apply Filters</button>
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
    search: props.search || '',
    startDate: props.startDate || moment().format('MM/DD/YYYY'),
    endDate: props.endDate || moment().add(6, 'months').format('MM/DD/YYYY'),
    price: props.price || '',
    eventType: props.eventType || '',
    category: props.category || '',
    language: props.language || '',
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
