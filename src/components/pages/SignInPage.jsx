import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from 'components/elements/SignInForm';
import logo from 'assets/logo-umbrella.png'

function SignInPage() {
  return (
    <div className="mx-auto mb-40 mt-10 w-full sm:w-96 md:p-0">
      <img className="mx-auto mb-5 h-20 object-scale-down" src={logo} alt="logo"/>
      <div className="text-center text-4xl font-bold">
        <h1 className="hidden pb-10 text-center md:block ">Welcome back!</h1>
      </div>

      <div className="container mx-auto">
        <SignInForm />

        <div className="mx-auto grid w-full grid-rows-2 sm:w-64">
          <div className="mt-5 grid grid-cols-2 md:basis-2/3 ">
            <span className="text-left">No Account?</span>
            <span className="text-right text-du-purple-500 hover:text-du-indigo-900">
              <Link to="/sign-up">Sign Up →</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;
