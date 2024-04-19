import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Layout: React.FC = () => {
  return (
    <div className="wrapper">
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
