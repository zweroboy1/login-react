import React from 'react';
import { Link } from 'react-router-dom';


export const Header: React.FC = () => {

  const user = false;

  return (
    <>
      <div>Header</div>
      {user ? (
        <Link to="/logout">
          Sign Out
        </Link>
      ) : (
        <>
          <Link to="/login">
            Login
          </Link>
          <Link to="/register">
            Sign Up
          </Link>
        </>
      )}
    </>
  );
};
