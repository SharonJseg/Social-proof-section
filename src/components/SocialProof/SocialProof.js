import React from 'react';
import './SocialProof.css';
import { RATING } from '../../utils/constants';
import SocialProofStarItem from '../SocialProofStarItem/SocialProofStarItem';
import CardList from '../CardList/CardList';

const SocialProof = () => {
  return (
    <section className='social-proof'>
      <div className='social-proof__top-wrapper'>
        <div className='social-proof__text-container'>
          <h2 className='social-proof__header'>
            10,000+ of our users love our products.
          </h2>
          <p className='social-proof__text'>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className='social-proof__rating-container'>
          <ul className='social-proof__rating-list'>
            {RATING.map((item, index) => (
              <SocialProofStarItem rating={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <CardList />
    </section>
  );
};

export default SocialProof;
