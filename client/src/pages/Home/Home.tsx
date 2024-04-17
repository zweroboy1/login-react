import React from 'react';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <main className="main home">
      <div className="home__wrapper">
        <div className="home__container">
          <h2 className="h2">The chemical &nbsp;negatively charged</h2>
          <p className="home__text">
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
          <p className="home__button-conteiner"><a href="#!" className="button button_home">Get Started</a></p>
        </div>
      </div>
    </main>
  );
};
