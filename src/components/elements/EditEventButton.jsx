import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';

function EditEventButton({ evt }) {
  const { currentUser } = useAuth();
  const { isStaff, isAuthenticated } = currentUser;

  if (!isAuthenticated || !isStaff) return;

  return (
    <div className="text-right">
      <Link
        className="block underline underline-offset-4 text-xl dark:text-white"
        to={`/events/${evt.id}/edit`}
      >
        Edit Event
      </Link>
    </div>
  )
}

export default EditEventButton;
