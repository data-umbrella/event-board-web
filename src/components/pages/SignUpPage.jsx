import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from 'components/elements/SignUpForm';
import logo from 'assets/logo-umbrella.png'

function SignUpPage() {
  return (
    <div className="container mx-auto lg:p-20 mb-40 mt-10">
      <img className="mx-auto object-scale-down h-20 w-15 mb-5" src={logo} alt="logo"/>
      <div className="container mx-auto text-center pb-10 font-bold">
        <h1 className="text-4xl">Sign up for free</h1>
      </div>

      <div className="container mx-auto lg:w-2/3">
        <SignUpForm />
        <div className="flex justify-center">
          <div className="basis-1/2 grid grid-cols-2 mt-5">
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
