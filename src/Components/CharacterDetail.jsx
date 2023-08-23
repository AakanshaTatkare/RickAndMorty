// CharacterDetail.js
// CharacterDetail.js
import React, { useEffect, useState } from "react";

const CharacterDetail = ({ character }) => {
  const [detailedCharacter, setDetailedCharacter] = useState(null);

  useEffect(() => {
    async function fetchDetailedCharacter() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${character.id}`
      );
      const data = await response.json();
      setDetailedCharacter(data);
    }

    fetchDetailedCharacter();
  }, [character.id]);

  if (!detailedCharacter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      {/* <h2>{character.name}</h2> */}
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>About: {detailedCharacter.origin.name}</p>
      <p>Location: {detailedCharacter.location.name}</p>
      {/* Display other additional details */}
    </div>
  );
};

export default CharacterDetail;
