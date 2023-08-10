import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PATHS } from '../router/constants';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div>
      <NavLink to={PATHS.HOME}>Home</NavLink>
      {user && <NavLink to={PATHS.PROFILE}>Profile</NavLink>}
      {user && user.role === 'admin' && (
        <NavLink to={PATHS.ADMIN.ROOT}>Admin</NavLink>
      )}
    
    </div>
  );
};

export default Sidebar;
