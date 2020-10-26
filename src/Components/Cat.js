import React, { useEffect, useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './Cat.css';

function Cat({ match }) {
    const GIHPYkey = "aIRMCUiPA27BbxaGHHGn0WqwW6ZsmS81";

    const [breed, setBreed] = useState({});
    const [portrait, setPortrait] = useState("");
    const [giphs, setGiphs] = useState([]);

    // Run on condition specified within '[]'. 
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
            var query = `http://api.giphy.com/v1/gifs/search?q=${breed.origin}&api_key=${GIHPYkey}&limit=2`;
            const response = await fetch(query);
            const data = await response.json();
            setGiphs(data.data);
            console.log(`${breed.origin}`);
        }
    }

    return (
        <div className="catContainer">
            <img src={portrait} alt="" />
            <h1>{breed.name}</h1>
            <h2>Life-span:</h2>
            <h3>{breed.life_span}</h3>
            <h2>Description:</h2>
            <h3>{breed.description}</h3>
            <h2>Temperament:</h2>
            <h3>{breed.temperament}</h3>
            <h2>Origin:</h2>
            <h3>{breed.origin}</h3>
            <div>
                {giphs.map(giph => (
                    <img key={giph.id} src={giph.images.downsized.url} alt="Giphy" />
                ))}
            </div>
        </div>
    );
}

export default Cat;