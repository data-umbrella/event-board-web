import React from 'react';
import { useQuery } from 'hooks/query-params';

function MagicLinkSentPage() {
  const queryParams  = useQuery();
  const email = queryParams.get('email');

  return (
    <section className="container mx-auto text-center">
      <div className="py-40">
        <h1 className="text-4xl font-bold">
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
    </section>
  )
}

export default MagicLinkSentPage;
