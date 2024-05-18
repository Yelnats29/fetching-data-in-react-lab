// LIST OF SHIPS ARRAY HERE

import React from 'react';
import StarshipCard from './StarshipCard';
import './StarshipList.css';

const StarshipList = ({ starships }) => {
    return (
        <div className="starship-list">
            {starships.map((starship) => (
                <StarshipCard key={starship.url} starship={starship} />
            ))}
        </div>
    );
};

export default StarshipList;