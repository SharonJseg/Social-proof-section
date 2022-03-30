import React from 'react';
import Card from '../Card/Card';
import { CARDS } from '../../utils/constants';

import './CardList.css';

function CardList() {
  return (
    <div className='social-proof__card-container'>
      <ul className='social-proof__cards'>
        {CARDS.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
