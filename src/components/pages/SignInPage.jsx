import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from 'components/elements/SignInForm';
import logo from 'assets/du_sc_logos/logo-umbrella.png'

function SignInPage() {
  return (
    <div className="mx-auto mb-40 mt-10 sm:w-96 w-full md:p-0">
      <img className="mx-auto object-scale-down h-20 w-15 mb-5" src={logo} alt="logo"/>
      <div className="text-center text-4xl font-bold">
        <h1 className="hidden md:block pb-10 text-center ">Welcome back!</h1>
      </div>

      <div className="container mx-auto">
        <SignInForm />

        <div className="mx-auto grid grid rows-2 w-full sm:w-64">
          <div className="grid grid-cols-2 md:basis-2/3 mt-5 ">
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
