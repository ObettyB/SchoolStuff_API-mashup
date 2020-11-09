import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [breeds, setBreeds] = useState([]);
    const [selected, setSelected] = useState("");

    // Run on condition specified within '[]'. 
    useEffect(() => {
        window.scrollTo(0, 0);
        getBreedsFromAPI();
    }, []);

    const getBreedsFromAPI = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const data = await response.json();
        setBreeds(data);
    }

    const updateSelection = e => {
        setSelected(e.target.value);
    }

    return (
        <div className="homeContainer">
            <div className="homeImgDiv"></div>
            <div className="searchContainer">
                <form>
                    <h2>Select a cat breed from 
                    <br />the list of common
                       <br />domesticated cats
                    </h2>
                    <select className="breedSelection" id="breeds"
                        value={selected}
                        onChange={updateSelection} >
                        <option disabled hidden value=''>  </option>
                        {breeds.map(breed => (
                            <option value={breed.id} key={breed.id}>{breed.name}</option>
                        ))}
                    </select>
                    <div className="getFactsDiv">
                        <Link to={selected}>
                            <button>Get facts</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;