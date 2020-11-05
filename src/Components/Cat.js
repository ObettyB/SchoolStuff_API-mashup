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
        <div className="catBackground">
            <div className="cardWrapper">
                <div className="catHeader">
                    <div className="flagImg">
                        <img key={flag.name} src={flag.flag} alt="" />
                    </div>
                    <div className="catImg">
                        <img src={portrait} alt="" />
                    </div>
                </div>
                <div className="txtFacts">
                    <div className="fact1">
                        <h1>{breed.name}</h1>
                        <h2>Life-span:</h2>
                        <h3>{breed.life_span} years</h3>
                    </div>
                    <div className="fact2">
                        <h1>Origin:</h1>
                        <h2 className="catCountry">{breed.origin}</h2>
                    </div>
                    <div className="fact3">
                        <h2>Temperament:</h2>
                        <h3>{breed.temperament}</h3>
                    </div>
                    <div className="fact4">
                        <h2>Description:</h2>
                        <h3>{breed.description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cat;