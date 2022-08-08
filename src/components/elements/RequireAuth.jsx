import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';

function RequireAuth({ children }) {
  let auth = useAuth();
  const [loading, setLoading] = useState(true);
  let location = useLocation();

  useEffect(() => {
    async function triggerStateChange () {
      await auth.authenticateUser();
      setLoading(false);
    }
    triggerStateChange();
  }, [])

  if (loading) return 'Loading...'

  if (!auth.currentUser.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
