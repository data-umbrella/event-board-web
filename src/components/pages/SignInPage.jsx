import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from 'components/elements/SignInForm';
import logo from 'assets/du_sc_logos/logo_data_umbrella.png'

function SignInPage() {
  return (
    <div className="container mx-auto lg:p-20 mb-40 mt-10">
      <img className="mx-auto object-scale-down h-20 w-15 mb-5" src={logo} alt="logo"/>
      <div className="container mx-auto text-center pb-10 font-bold">
        <h1 className="text-4xl">Welcome back!</h1>
      </div>

      <div className="container mx-auto lg:w-2/3">
        <SignInForm />

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:basis-1/2 mt-5">
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
