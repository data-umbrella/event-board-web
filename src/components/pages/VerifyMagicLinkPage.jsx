import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';
import PageLoader from 'components/elements/PageLoader';

function VerifyMagicLinkPage() {
  const [pageError, setPageError] = useState();
  const [searchParams] = useSearchParams();
  const { token } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    const email = searchParams.get('email');

    auth.verifyOneTimePassCode(token, email, (success, error) => {
      if (success) {
        navigate('/events/new');
      } else {
        setPageError(error);
      }
    });
  }, []);

  // TODO: Clean up loading and error states here.
  if (pageError) return <div>{ pageError }</div>

  return <PageLoader />;
}

export default VerifyMagicLinkPage;
