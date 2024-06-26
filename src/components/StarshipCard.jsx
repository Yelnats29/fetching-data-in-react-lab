// IMPORT IN STARSHIP LIST
// MAKE LIKE BOOKCARDS FROM OTHER LAB?


import React from 'react';
import './StarshipCard.css';

const StarshipCard = ({ starship }) => {
    return (
        <div className="starshipCard">
            <h3>{starship.name}</h3>
            <p>Model: {starship.model}</p>
            <p>class: {starship.starship_class}</p>
            <p>manufacturer: {starship.manufacturer}</p>
            <br></br>
        </div>
    );
};

export default StarshipCard;