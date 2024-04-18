import React from 'react';

import deal1Image from '../../assets/deal1.jpg';
import deal2Image from '../../assets/deal2.jpg';
import deal3Image from '../../assets/deal3.jpg';
import deal4Image from '../../assets/deal4.jpg';

type deal = {
  name: string;
  price: number;
  yield: number;
  sold: number;
  ticket: number;
  daysLeft: number;
  image: string;
};

const deals: deal[] = [
  {
    name: 'The Marina Torch',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: deal1Image,
  },
  {
    name: 'HHHR Tower',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: deal2Image,
  },
  {
    name: 'Ocean peaks',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: deal3Image,
  },
  {
    name: 'Al Yaqoub Tower',
    price: 6500000,
    yield: 9.25,
    sold: 75,
    ticket: 60000,
    daysLeft: 150,
    image: deal4Image,
  },
];

export const Deals: React.FC = () => {
  return (
    <section className="deal">
      <h2 className="deal__title">Open Deals</h2>
      <div className="deal__container">
        {deals.map((deal) => (
          <div className="deal__card" key={deal.name}>
            <div className="deal__wrapper">
              <div className="deal__image-container">
                <img className="deal__image" src={deal.image} alt={deal.name} />
              </div>
              <div className="deal__content">
                <h3 className="h3">{deal.name}</h3>
                <div className="deal__info text">
                  <div className="deal__info-part">
                    {deal.price.toLocaleString()} Dhs
                  </div>
                  <div className="deal__info-part">Yield {deal.yield}%</div>
                  <div className="deal__info-part">Sold {deal.sold}%</div>
                  <div className="deal__info-part">
                    Tiket - {deal.ticket.toLocaleString()} Dhs
                  </div>
                  <div className="deal__info-part">
                    Days left {deal.daysLeft}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
