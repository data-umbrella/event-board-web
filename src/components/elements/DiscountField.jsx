import { Field } from 'formik';
import formStyleClasses from 'styles/forms';

const DISCOUNT_UNIT_OPTIONS = [
  { label: '%', value: 'percentage' },
  { label: '$', value: 'dollar' },
  { label: 'Points', value: 'points' },
]

function DiscountField () {
  return (
    <div className="grid grid-cols-6 gap-1">
      <div className="col-span-2">
        <label>Discount Amount</label>
        <Field
          name="discountValue"
          type="text"
          className={formStyleClasses.input}
        />
      </div>

      <div className="col-span-1">
        <label>Unit</label>
        <Field name="discountUnit" component="select" className={formStyleClasses.select}>
          {DISCOUNT_UNIT_OPTIONS.map(({ label, value }) => {
            return <option key={value} value={value} className="text-center">
              {label}
            </option>
          })}
        </Field>
      </div>

      <div className="col-span-3">
        <label>Discount Code</label>
        <Field
          name="discountCode"
          type="text"
          className={formStyleClasses.input}
        />
      </div>
    </div>
  )
}

export default DiscountField;
