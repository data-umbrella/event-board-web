import React from 'react';

function ConfirmRegistrationPage() {
  return (
    <div className="container mx-auto p-40 text-center">
      <h1 className="text-2xl">
        { "We've sent you an email to confirm your registration" }
      </h1>

      <p className="mt-10 text-lg">
        Please follow the link in the email to confirm your account.
      </p>
    </div>
  )
}

export default ConfirmRegistrationPage;
