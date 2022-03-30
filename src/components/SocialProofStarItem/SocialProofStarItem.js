import React from 'react';
import './SocialProofStarItem.css';
import starIcon from '../../images/icon-star.svg';

function SocialProofStarItem({ rating }) {
  return (
    <li className='social-proof__rating-item'>
      <div className='social-proof__stars-container'>
        <ul className='social-proof__stars'>
          <li className='social-proof__star'>
            <img
              src={starIcon}
              alt='star icon'
              className='social-proof__rating-star-icon'
            />
          </li>
          <li className='social-proof__star'>
            <img
              src={starIcon}
              alt='star icon'
              className='social-proof__rating-star-icon'
            />
          </li>
          <li className='social-proof__star'>
            <img
              src={starIcon}
              alt='star icon'
              className='social-proof__rating-star-icon'
            />
          </li>
          <li className='social-proof__star'>
            <img
              src={starIcon}
              alt='star icon'
              className='social-proof__rating-star-icon'
            />
          </li>
          <li className='social-proof__star'>
            <img
              src={starIcon}
              alt='star icon'
              className='social-proof__rating-star-icon'
            />
          </li>
        </ul>
      </div>
      <p className='social-proof__rating-item_text'>{rating.text}</p>
    </li>
  );
}

export default SocialProofStarItem;
