import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

export const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.email);

  return (
    <header className="header">
      <div className="header__container">
        {user ? (
          <Link to="/logout" className="button button_header">
            Sign Out
          </Link>
        ) : (
          <>
            <Link to="/login" className="button button_header">
              Log In
            </Link>
            <Link to="/register" className="button button_header">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
