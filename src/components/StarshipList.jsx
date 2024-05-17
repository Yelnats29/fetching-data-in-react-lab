// LIST OF SHIPS ARRAY HERE

import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <div className="container">
      {starships.map((starship) => (
        <StarshipCard key={starship.id} starship={starship} />
      ))}
    </div>
  );
};

export default StarshipList;