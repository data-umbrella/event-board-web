import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from 'components/elements/SignUpForm';
import logo from 'assets/logo-umbrella.png'

function SignUpPage() {
  return (
    <div className="container mx-auto mb-40 mt-10 lg:p-20">
      <img className="mx-auto mb-5 h-20 object-scale-down" src={logo} alt="logo"/>
      <div className="container mx-auto pb-10 text-center font-bold">
        <h1 className="text-4xl">Sign up for free</h1>
      </div>

      <div className="container mx-auto lg:w-2/3">
        <SignUpForm />
        <div className="flex justify-center">
          <div className="mt-5 grid grid-cols-2 md:basis-1/2">
            <span className="text-left">Have an account?</span>
            <span className="text-right">
              <Link style={ { color: '#6B26FF' } } to="/sign-in">Sign In →</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;
