const BASE_URL = `https://swapi.dev/api/starships/`




const showAllShips = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json();
        console.log('Data:', data);
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
};

const searchShip = async (shipNumber) => {
    try {
        const res = await fetch(`${BASE_URL}?search=${shipNumber}`);
        const data = await res.json();
        console.log('Search Data:', data);
        return data.results;
    } catch (err) {
        console.error(err);
        return [];
    }
};


// Do it this way when there are multiple variables to send
export { showAllShips, searchShip };