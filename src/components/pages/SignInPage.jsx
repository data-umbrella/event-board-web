import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from 'components/elements/SignInForm';
import logo from 'assets/logo-umbrella.png'

function SignInPage() {
  return (
    <div className="mx-auto mb-40 mt-10 md:w-96 w-full px-32 md:p-0">
      <img className="mx-auto object-scale-down h-20 w-15 mb-5" src={logo} alt="logo"/>
      <div className="text-center text-4xl font-bold">
        <h1 className="hidden md:block text-center pb-10">Welcome back!</h1>
      </div>

      <div className="container mx-auto">
        <SignInForm />

        <div className="grid grid rows-2 md:w-64 w-full mx-auto">
          <div className="md:basis-2/3 grid grid-cols-2 mt-5">
            <span className="text-left">No Account?</span>
            <span className="text-right">
              <Link style={ { color: '#6B26FF' } } to="/sign-up">Sign Up →</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;
