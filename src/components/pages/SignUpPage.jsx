import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from 'components/elements/SignUpForm';

function SignUpPage() {
  return (
    <div className="container mx-auto lg:p-20">
      <div className="container mx-auto text-center pb-6 font-bold">
        <h1 className="text-3xl">Sign up for free</h1>
      </div>

      <div className="container mx-auto lg:w-2/3">
        <SignUpForm />
        
        <div className="flex justify-center">
          <div className="basis-1/2 grid grid-cols-2 mt-10">
            <span className="text-left">Have an account?</span>
            <span className="text-right">
              <Link to="/sign-in">Sign In →</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;
