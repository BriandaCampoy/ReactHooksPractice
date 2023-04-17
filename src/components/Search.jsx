import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="search">
      <label htmlFor="search">Buscar: </label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
