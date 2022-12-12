import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from 'hooks/authentication';
import { sessionStore } from 'utils/sessions';

function EditEventButton({ evt }) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { isStaff, isAuthenticated, id: userId } = currentUser;
  const { author: authorId } = evt;

  function editEvent () {
    const tmpId = uuidv4();
    sessionStore(tmpId, evt);
    navigate(`/events/${tmpId}/edit`);
  }

  if (!isAuthenticated) return;
  // if (!isStaff && authorId !== userId) return;

  return (
    <div className="text-right">
      <button
        className="p-2 bg-blue-600 text-white rounded mb-2"
        onClick={editEvent}
      >
        Edit Event
      </button>
    </div>
  )
}

export default EditEventButton;
