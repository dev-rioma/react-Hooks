import React, { useState, useEffect, useReducer, useMemo } from 'react';
import '../styles/Characters.css';
import { StarIcon } from '@heroicons/react/solid';

const Star = <StarIcon className='h-5 w-5 text-blue-500' viewBox='0 0 20 20' fill='yellow' />

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            const exist = state.favorites.find((item) => item.id === action.payload.id);
            if (exist) return {
                ...state
            }; return { 
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    };
    
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');

    useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    return (

        <>
            {favorites.favorites.map(favorite => (
                <span className='Box_fav' key={favorite.id}>
                    <img className='Fav_img' src={favorite.image} alt={favorite.name}  />
                </span>
            ))}

            <div className="Search">
                <input type="text" value={search} onChange={handleSearch}/>
            </div>

            <div className="Characters">
                {filteredUsers.map(character => (
                    <div className='image_container'>
                        <div className='card_info' key={character.id}>
                            <h2>{character.name}</h2>
                            <h4>Race: {character.species}</h4>
                            <h4>Status: {character.status}</h4>
                            <h4>Gender: {character.gender}</h4>
                            <h4>Origin: {character.origin.name}</h4>
                            <button className='Fav' type='button' onClick={() => handleClick(character)}>{Star}</button>
                        </div>
                        <img className='character_img' src={character.image} alt={character.name} /> 
                    </div>
                ))}
            </div>
        </>
    );
}

export default Characters;


