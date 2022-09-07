import React from 'react';

function ContactSuccessPage() {
  return (
    <div className="container mx-auto text-center">
      <div className="pt-60 pb-60">
        <h1 className="text-2xl">
          { "Thanks for reaching out!" }
        </h1>

        <p className="mt-10 text-lg">
          We will review your message and get back to you as soon as possible.
        </p>
      </div>
    </div>
  )
}

export default ContactSuccessPage;
