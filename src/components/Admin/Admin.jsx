import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Admin = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <div>You do not have access to this page.</div>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* List of users with pagination and search */}
    </div>
  );
};

export default Admin;
