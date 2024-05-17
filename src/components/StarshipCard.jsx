// IMPORT IN STARSHIP LIST
// MAKE LIKE BOOKCARDS FROM OTHER LAB?


import React from 'react';

const StarshipCard = ({ starship }) => {
  return (
    <div>
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>class: {starship.starship_class}</p>
      <p>manufacturer: {starship.manufacturer}</p>
    </div>
  );
};

export default StarshipCard;