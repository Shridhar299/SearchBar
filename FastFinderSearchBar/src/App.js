import React from 'react';
import SearchBar from './components/SearchBar';
import countries from './data/countries.json';

function App() {
  return (
    <div>
      <SearchBar countries={countries} />
    </div>
  );
}

export default App;