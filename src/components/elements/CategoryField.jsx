import { Field } from 'formik';
import { CATEGORY_OPTIONS } from 'constants/events';
import formStyleClasses from 'styles/forms';

function EventTypeField () {
  return (
    <>
      <label>Category</label>
      <Field name="category" component="select" className={formStyleClasses.select}>
        <option>All</option>
        { CATEGORY_OPTIONS.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </>
  )
}

export default EventTypeField;
