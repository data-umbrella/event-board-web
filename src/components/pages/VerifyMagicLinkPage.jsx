import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';

function VerifyMagicLinkPage() {
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState();
  const { token } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    auth.verifyOneTimePassCode(token, (success, error) => {
      if (success) {
        setLoading(false);
        navigate('/');
      } else {
        setLoading(false);
        setPageError(error);
      }
    });
  }, []);

  // TODO: Clean up loading and error states here.

  if (loading) return <div>Loading...</div>
  if (pageError) return <div>{ pageError }</div>

  return <div>Success!</div>
}

export default VerifyMagicLinkPage;
