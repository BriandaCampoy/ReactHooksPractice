import React from 'react';
import '@styles/CharacterCard.css';

const CharacterCard = ({ character, addFavorite }) => {
  return (
    <div className="characterCard">
      <img src={character.image} alt="" />
      <button className="btn__AddFavorite" onClick={()=>addFavorite(character)}>⭐</button>
      <h3>{character.name}</h3>
      <div className="characterCard__data">
        <h4>Species: {character.species}</h4>
        <h4>Status: {character.status == 'Alive' ? '❤' : '☠'}</h4>
      </div>
    </div>
  );
};

export default CharacterCard;
