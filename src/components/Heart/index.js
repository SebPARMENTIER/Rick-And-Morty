// == Import : npm
import React from 'react';
import { FaHeart } from 'react-icons/fa';

// == Import : local
import './heart.scss';

// == Component
const Heart = ({ rating }) => (
  <div className="ratingStatic">
    {[...Array(5)].map((_star, i) => {
      const ratingValue = i + 1;
      return (
        <FaHeart
          key={ratingValue}
          className="starStatic"
          color={ratingValue <= Number(rating) ? '#62a4ab' : '#e4e5e9'}
          size={20}
        />
      );
    })}
  </div>
);

// == Export
export default Heart;
