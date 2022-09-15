import React from 'react';
import { useAuth } from 'hooks/authentication'; 

function AccountSettingsPage() {
  const auth = useAuth();

  return (
    <div className="w-3/4 container mx-auto p-20">
      <h1 className="text-2xl font-bold">Email</h1>
      <p>{auth.currentUser.email}</p>
    </div>
  );
}

export default AccountSettingsPage;
