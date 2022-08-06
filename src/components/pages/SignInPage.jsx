import React from 'react';
import SignInForm from 'components/elements/SignInForm';

function SignInPage() {
  return (
    <div className="container mx-auto p-20">
      <div className="container mx-auto text-center pb-6 font-bold">
        <h1 className="text-3xl">Welcome Back</h1>
      </div>

      <div className="container mx-auto w-2/3">
        <SignInForm />
      </div>
    </div>
  )
}

export default SignInPage;
