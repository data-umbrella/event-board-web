import React from 'react';
import { useQuery } from 'hooks/query-params';

function MagicLinkSentPage() {
  const queryParams  = useQuery();
  const email = queryParams.get('email');

  return (
    <div className="container mx-auto text-center">
      <div className="pt-40 pb-40">
        <h1 className="font-bold text-4xl">
          We&apos;ve sent you a magic link to login!
        </h1>

        <p className="mt-10 text-2xl">
          Please check your email <span className="font-bold">{ email }</span>
        </p>

        <p className="mt-10 text-xl">
          Clicking the link in the email will redirect you back to the website and sign you in.
          You can safely close this tab.
        </p>
      </div>
    </div>
  )
}

export default MagicLinkSentPage;
