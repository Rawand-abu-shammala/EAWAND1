import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
