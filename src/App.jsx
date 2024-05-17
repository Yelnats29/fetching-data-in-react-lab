import React from 'react';
import { useState, useEffect } from 'react';
import * as starshipService from './services/StarshipService';
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import "./App.css"



const App = () => {
const [starships, setStarships] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await starshipService.showAllShips();
    setStarships(data);
  };
  fetchData();
}, []);


const handleSearch = async (query) => {
  const data = await starshipService.searchShip(query);
  setStarships(data)
};

return (
  <section>
    <h1>Star Wars API</h1>
  <div>
    <StarshipSearch onSearch={handleSearch} />
    <StarshipList starships={starships} />
  </div>
  </section>
);
};

export default App;