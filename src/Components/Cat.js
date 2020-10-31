import React, { useEffect, useState } from 'react';
import './Cat.css';

function Cat({ match }) {
    const [breed, setBreed] = useState({});
    const [portrait, setPortrait] = useState("");
    const [flag, setFlag] = useState([]);

    // Run on load with '[]'. 
    useEffect(() => {
        getBreedFromAPI();
    }, []);

    // Run on condition specified within '[]'. 
    useEffect(() => {
        getFlagFromAPI();
    }, [breed]);


    const getBreedFromAPI = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + match.params.catID);
        const data = await response.json();
        setBreed(data[0].breeds[0]);
        setPortrait(data[0].url);
    }

    const getFlagFromAPI = async () => {
        if (`${breed.name}` != typeof (undefined)) {
            var query = `https://restcountries.eu/rest/v2/name/${breed.origin}`;
            const response = await fetch(query);
            const data = await response.json();
            setFlag(data[0]);
        }
    }
    return (
        <div className="catContainer">
            <div className="factsWrapper">

                <div className="catFactRow1">
                    <div>
                        <img className="catPortrait" src={portrait} alt="" />
                    </div>
                    <div className="description">
                        <h1>{breed.name}</h1>
                        <h2>Life-span:</h2>
                        <h3>{breed.life_span} years</h3>
                    </div>
                    <div className="description">
                        <h2>Temperament:</h2>
                        <h3>{breed.temperament}</h3>
                    </div>
                </div>

                <div className="catFactRow2">
                    <div className="description">
                        <h2>Description:</h2>
                        <h3>{breed.description}</h3>
                    </div>
                    <div className="description">
                        <h1>Origin:</h1>
                        <h2 className="catCountry">{breed.origin}</h2>
                    </div>
                    <div className="flagContainer" >
                        <img key={flag.name} src={flag.flag} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cat;