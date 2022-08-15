import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from 'components/elements/SignInForm';
import logo from 'assets/logo-color.svg'

function SignInPage() {
  return (
    <div className="container mx-auto lg:p-20 mb-40 mt-10">
      <img className="container object-center object-contain w-full h-48" src={logo} alt="logo"/>
      <div className="container mx-auto text-center pb-10 font-bold">
        <h1 className="text-4xl text-center">Welcome back!</h1>
      </div>

      <div className="container mx-auto lg:w-1/2">
        <SignInForm />

        <div className="flex justify-center">
          <div className="lg:basis-1/2 grid grid-cols-2 mt-5">
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
