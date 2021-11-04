import React from 'react';
import "./Header.css";
import vinyl from "../../Media/vinyl.mp4";

export const Header = () => {
    return (
        <div className="header-container">
            <video className="video" src ={vinyl} autoPlay loop muted /> 
            <h1>AGU SOTERAS</h1>
            <p>"todas las canciones hablan de la misma vida"</p>
        </div>
    )
}

