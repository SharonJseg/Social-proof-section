import React from 'react';

import './Card.css';

function Card({ card }) {
  return (
    <li>
      <aside className='social-proof__card'>
        <div className='social-proof__card_buyer-container'>
          <img
            src={require(`../../images/${card.image}`)}
            alt='buyer'
            className='social-proof__buyer-image'
          />
          <p className='social-proof__buyer-name'>
            {card.name}
            <span className='social-proof__buyer-title'>Verified Buyer</span>
          </p>
        </div>
        <p className='social-proof__card-text'>{card.text}</p>
      </aside>
    </li>
  );
}

export default Card;
