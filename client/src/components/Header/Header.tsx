import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import { logoutUser } from '../../store/reducers/userSlice';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.email);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="header">
      <div className="header__container">
        {user ? (
          <button className="button button_header" onClick={handleLogout}>
          Sign Out
        </button>
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
