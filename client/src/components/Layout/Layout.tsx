import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Link to="/" className="logo button button_header">Main</Link>
      <ToastContainer
        limit={1}
        autoClose={3000}
        position="bottom-right"
        theme="colored"
      />
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
