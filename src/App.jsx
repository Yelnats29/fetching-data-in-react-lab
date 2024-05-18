import React from 'react';
import { useState, useEffect } from 'react';
import * as starshipService from './services/StarshipService';
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import "./App.css"



const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await starshipService.showAllShips();
      setStarships(data);
      setFilteredStarships(data);
    };
    fetchData();
  }, []);


  const handleSearch = async (query) => {
    // This part is done if I want an overall query system in place
    // const data = await starshipService.searchShip(query);
    // setStarships(data)
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase()) ||
      starship.model.toLowerCase().includes(query.toLowerCase()) ||
      starship.manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <section className='app-container'>
      <header>
        <h1>Star Wars API</h1>
      </header>
      <div className='search-container'>
        <StarshipSearch onSearch={handleSearch} />
        <h2>List of Starships</h2>
        <StarshipList starships={filteredStarships} />
      </div>
    </section>
  );
};

export default App;




// What I did here for future reference:

// Summarized Steps:

// Fetch all starships once when the app loads.
// Store the fetched starships in two states: starships (for the full list) and filteredStarships (for the list to be displayed).
// Filter the starships array based on the search query and update the filteredStarships state.
// Render the filteredStarships in the StarshipList component.