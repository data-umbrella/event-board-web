import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';

function VerifyMagicLinkPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    auth.verifyOneTimePassCode(token, (success, error) => {
      if (success) {
        navigate('/events/new');
      } else {
        window.alert(error);
      }
    });
  }, [token, auth, navigate]);

  return (
    <div className="container mx-auto p-40 text-center">
      Loading...
    </div>
  )
}

export default VerifyMagicLinkPage;
