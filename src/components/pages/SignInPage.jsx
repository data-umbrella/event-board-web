import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from 'components/elements/SignInForm';

function SignInPage() {
  return (
    <div className="container mx-auto lg:p-20">
      <div className="container mx-auto text-center pb-6 font-bold">
        <h1 className="text-3xl">Welcome Back</h1>
      </div>

      <div className="container mx-auto lg:w-2/3">
        <SignInForm />
        <div className="flex justify-center">
          <div className="basis-1/2 grid grid-cols-2 mt-10">
            <span className="text-left">No Account?</span>
            <span className="text-right">
              <Link to="/sign-up">Sign Up →</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;
