import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
        <section className="notfound">
          <h2 className="notfound__h2 h2">Page is not found</h2>
          <div className="notfound__img"></div>
          <div>
            <Link to="/" className="button button_notfound">to Main Page</Link>
          </div>
        </section>
  );
};
