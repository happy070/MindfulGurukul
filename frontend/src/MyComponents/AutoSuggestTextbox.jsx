import React, { useState } from 'react';

const Autosuggest = ({ onStateChange }) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  
  const stateSuggestions = ['Gujarat', 'Maharashtra', 'Karnataka'];

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setSearchText(userInput);

    
    const filteredSuggestions = stateSuggestions.filter(
      (state) => state.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setSuggestions([]);
    onStateChange(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a state..."
        value={searchText}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autosuggest;
