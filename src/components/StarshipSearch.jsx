// SEARCH FORM GOES HERE

import React, { useState } from 'react';

const StarshipSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchQuery);
    }

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label>Select a Ship Number:</label>
                <input
                    type="text"
                    placeholder="Search starships..."
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default StarshipSearch;
