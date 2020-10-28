import React, { useEffect, useState } from 'react';
import './Cat.css';

function Cat({ match }) {
    const [breed, setBreed] = useState({});
    const [portrait, setPortrait] = useState("");
    const [giphs, setGiphs] = useState([]);

    // Run on load with '[]'. 
    useEffect(() => {
        getBreedFromAPI();
    }, []);

    // Run on condition specified within '[]'. 
    useEffect(() => {
        getGiphFromAPI();
    }, [breed]);


    const getBreedFromAPI = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + match.params.catID);
        const data = await response.json();
        setBreed(data[0].breeds[0]);
        setPortrait(data[0].url);
    }

    const getGiphFromAPI = async () => {
        if (`${breed.name}` != typeof (undefined)) {
            var query = `http://api.giphy.com/v1/gifs/search?q=${breed.name}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=3`;
            const response = await fetch(query);
            const data = await response.json();
            setGiphs(data.data);
        }
    }
    return (
        <div className="catContainer">
            <div className="catHeader">
                <img className="catPortrait" src={portrait} alt="" />
                <div>
                    <h1>{breed.name}</h1>
                    <h2>Life-span :</h2>
                    <h3>{breed.life_span} years</h3>
                </div>
            </div>
            <h2>Description :</h2>
            <h3>{breed.description}</h3>
            <h2>Temperament :</h2>
            <h3>{breed.temperament}</h3>
            <h2>Originating from :</h2>
            <h3 className="catCountry">{breed.origin}</h3>
            <div className="giphContainer">
                {giphs.map(giph => (
                    <img key={giph.id} src={giph.images.downsized.url} alt="Giphy" />
                ))}
            </div>
                <h5>*Giph searchterm '{breed.name}'</h5>
        </div>
    );
}

export default Cat;