 import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search projects..." 
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
    </div>
  );
}

export default SearchBar;