import React from 'react';
import { Deals } from '../../components/Deals/Deals';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="home__wrapper">
        <div className="home__overlay">
          <div className="home__container">
            <h1 className="h1">The chemical &nbsp;negatively charged</h1>
            <p className="home__text">
              Numerous calculations predict, and experiments confirm, that the
              force field reflects the beam, while the mass defect is not
              formed. The chemical compound is negatively charged. Twhile the
              mass defect is
            </p>
            <p className="home__button-conteiner">
              <Link to="/404" className="button button_home">
                Get Started
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Deals />
    </div>
  );
};
