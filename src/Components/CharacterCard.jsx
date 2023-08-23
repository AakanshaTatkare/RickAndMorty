// CharacterCard.js
import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <Link to={`/character/${character.id}`}>View Details</Link>
    </div>
  );
};

export default CharacterCard;
