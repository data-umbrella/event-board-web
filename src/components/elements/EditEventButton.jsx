import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';

function EditEventButton({ evt }) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { isStaff, isAuthenticated } = currentUser;

  function editEvent () {
    navigate(`/events/${evt.id}/edit`);
  }

  if (!isAuthenticated || !isStaff) return;

  return (
    <div className="text-right">
      <Link
        className="p-2 underline underline-offset-4 text-xl dark:text-white"
        to={`/events/${evt.id}/edit`}
      >
        Edit Event
      </Link>
    </div>
  )
}

export default EditEventButton;
