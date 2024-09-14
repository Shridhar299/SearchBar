import React, { useState } from 'react';

const SearchBar = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredCountries = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredCountries(filteredCountries);
  };

  return (
    <div>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a country"
      />
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;