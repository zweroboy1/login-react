import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
// import { ToastContainer } from 'react-toastify';
// import { TOAST_DELAY } from '../../constants';

// TODO: hide ToastContainer
export const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

/*
      <ToastContainer limit={1} autoClose={TOAST_DELAY} position="top-center" />

*/
