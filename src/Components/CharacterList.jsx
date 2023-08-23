// CharacterList.js
import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { fetchCharacters } from "./api";
import "./CharacterList.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const characterData = await fetchCharacters();
      setCharacters(characterData);
      setFilteredCharacters(characterData); // Initialize filteredCharacters with all characters
    }
    fetchData();
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = characters.filter((character) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      return (
        character.name.toLowerCase().includes(lowerCaseQuery) ||
        character.status.toLowerCase().includes(lowerCaseQuery) ||
        character.gender.toLowerCase().includes(lowerCaseQuery)
      );
    });
    setFilteredCharacters(filtered);
  };

  return (
    <div className="character-list">
      <SearchBar onSearch={handleSearch} />
      <div className="characters">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
