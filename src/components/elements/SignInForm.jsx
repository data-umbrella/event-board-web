// React dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Custom hooks
import { useAuth } from 'hooks/authentication';
// Styles
import formStyleClasses from 'styles/forms';

function SignInForm () {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  function handleInputChange (e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    auth.signin(formData, () => {
      navigate('/events/new', { replace: true });
    });
  }

  return (
    <div className="flex justify-center">
      <form className="basis-1/2" onSubmit={handleSubmit}>

        <div className="py-2">
          <label className="block" htmlFor="email">Username or email</label>
          <input
            autoComplete="off"
            className={formStyleClasses.input}
            name="email"
            onChange={handleInputChange}
            type="text"
          />
        </div>

        <div className="py-2">
          <label className="block" htmlFor="password">Password</label>
            <input
              className={formStyleClasses.input}
              name="password"
              onChange={handleInputChange}
              type="password"
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
