import React from 'react';
import { useState, useEffect } from 'react';
import { Deal } from '../../types';
import { BASE_URL } from '../../constants';
import { toast } from 'react-toastify';

export const Deals: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);

  useEffect(() => {
    const endpoint = `${BASE_URL}/deals`;
    fetch(endpoint)
      .then((response) => response.json() as Promise<Deal[]>)
      .then((data) => setDeals(data))
      .catch((e) => {
        const errorMessage =
          e instanceof Error ? e.message : 'Error fetching deals';
        const error =
          errorMessage === 'Failed to fetch'
            ? 'Backend server is not available'
            : errorMessage;
        toast.error(error, { toastId: 'toast', className: 'toast-error' });
      });
  }, []);

  return (
    <section className="deal">
      <h2 className="deal__title">Open Deals</h2>
      <div className="deal__container">
        {deals.map((deal) => (
          <div className="deal__card" key={deal.name}>
            <div className="deal__wrapper">
              <div className="deal__image-container">
                <img
                  className="deal__image"
                  src={`${BASE_URL}/${deal.image}`}
                  alt={deal.name}
                />
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
