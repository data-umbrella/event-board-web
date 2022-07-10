import formStyleClasses from 'styles/forms';
import { useNavigate } from 'react-router-dom';

function SignInForm () {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate('/events/new');
  }

  return (
    <div className="flex justify-center">
      <form className="basis-1/2" onSubmit={handleSubmit}>

        <div className="py-2">
          <label className="block" htmlFor="email">Username or email</label>
          <input
            id="email"
            type="text"
            autoComplete="off"
            className={formStyleClasses.input}
          />
        </div>

        <div className="py-2">
          <label className="block" htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className={formStyleClasses.input}
            />
        </div>

        <div className="py-2">
          <button type="submit" className={formStyleClasses.button}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;
