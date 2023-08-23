// SearchBar.js
import React, { useState } from "react";
import "./SearchBar.css"; // Import your styles

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Call the onSearch prop with the search query
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search by name, status, or gender"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <hr />
    </div>
  );
};

export default SearchBar;
