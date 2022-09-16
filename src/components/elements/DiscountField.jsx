import React from 'react';
import { Field } from 'formik';
import formStyleClasses from 'styles/forms';

const DISCOUNT_UNIT_OPTIONS = [
  { label: '%', value: 'percentage' },
  { label: '$', value: 'dollar' },
  { label: 'Points', value: 'points' },
]

function DiscountField () {
  return (
    <section className="grid gap-1 md:grid-cols-6 md:self-end md:pb-6">
      <div className="md:col-span-1">
        <label>Discount</label>
        <Field name="discountUnit" component="select" className={formStyleClasses.select}>
          {DISCOUNT_UNIT_OPTIONS.map(({ label, value }) => {
            return <option key={value} value={value} className="text-center">
              {label}
            </option>
          })}
        </Field>
      </div>
      <div className="md:col-span-2 md:ml-4">
        <label>Amount</label>
        <Field
          name="discountValue"
          type="text"
          className={formStyleClasses.input}
        />
      </div>

      <div className="md:col-span-3">
        <label>Discount Code</label>
        <Field
          name="discountCode"
          type="text"
          className={formStyleClasses.input}
        />
      </div>
    </section>
  )
}

export default DiscountField;
