import React from 'react';
import { Header } from '../../components/Header/Header.tsx';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <section className="notfound">
          <h1 className="notfound__h1 h1">Page Not Found</h1>
          <div className="notfound__img"></div>
          <div>
            <Link to="/">to Main Page</Link>
          </div>
        </section>
      </main>
    </div>
  );
};
