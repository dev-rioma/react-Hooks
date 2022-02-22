import React, { useState, useEffect } from 'react';
import '../styles/Characters.css';
const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    return (
        <div className="Characters">
            {characters.map(character => (
                <div className='image_container'>
                    <div className='card_info'>
                        <h2>{character.name}</h2>
                        <h4>Race: {character.species}</h4>
                        <h4>Status: {character.status}</h4>
                        <h4>Gender: {character.gender}</h4>
                        <h4>Origin: {character.origin.name}</h4>
                    </div>
                    <img className='character_img' src={character.image} alt={character.name} /> 
                </div>
            ))}
        </div>
    );
}

export default Characters;


