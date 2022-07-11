import { Field } from 'formik';

function TextField (props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <Field {...props} />
    </>
  )
}

export default TextField;
