import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VERIFY_URL } from 'constants/urls';
import { useAuth } from 'hooks/authentication';
import { useNavigate } from 'react-router-dom';

function VerifyMagicLinkPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    auth.verifyOneTimePassCode(token, (success, error) => {
      if (success) {
        navigate('/events/new');
      } else {
        // TODO: Handle error cases gracefully.
        console.log(error);
      }
    });
  }, [token]);

  return (
    <div className="container mx-auto p-40 text-center">
      Loading...
    </div>
  )
}

export default VerifyMagicLinkPage;
