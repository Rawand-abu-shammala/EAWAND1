// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PATHS } from '../router/router';

const Header = () => {
  const { user } = useAuth();

  return (
    <div>
      {user && (
        <Link to={PATHS.PROFILE}>
          Welcome, {user.username}! {/* Add user profile picture */}
        </Link>
      )}
    </div>
  );
};

export default Header;

