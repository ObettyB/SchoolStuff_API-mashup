import React from 'react';
import './TitleBar.css';

const TitleBar = () => {
    return (
        <div className="titleBar">
            <h1>Find Your <span>Fluffy</span> Friend</h1>
            <img className="titleImg" src={require('../images/paw-sil.png')} alt=""/>
        </div>
    );
}

export default TitleBar;