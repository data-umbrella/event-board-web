import formStyleClasses from 'styles/forms';
import { useNavigate } from 'react-router-dom'

function SignUpForm () {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate('/confirm-email');
  }

  return (
    <div className="flex justify-center">
      <form className="basis-1/2" onSubmit={handleSubmit}>
        <div className={formStyleClasses.inputContainer}>
          <label className="block" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            autoComplete="off"
            className={formStyleClasses.input}
          />
        </div>

        <div className={formStyleClasses.inputContainer}>
          <label className="block" htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            autoComplete="off"
            className={formStyleClasses.input}
          />
        </div>

        <div className={formStyleClasses.inputContainer}>
          <button className={formStyleClasses.button}>Create Account</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;
