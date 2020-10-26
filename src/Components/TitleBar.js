import React from 'react';
import './TitleBar.css';
import { Link } from 'react-router-dom';

const TitleBar = () => {
    return (
        <div className="titleBar">
            <Link className="Link"to="/">
                <h1>Fun <span>Feline</span> Facts</h1>
            </Link>
            <Link to="/">
                <img className="titleImg" src={require('../images/paw-sil.png')} alt="" />
            </Link>
        </div>
    );
}

export default TitleBar;