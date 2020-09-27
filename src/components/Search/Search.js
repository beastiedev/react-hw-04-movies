import React, { useState } from 'react';

const Search = ({ onSubmit }) => {
  const [ search, setSearch ] = useState();

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  const handleInputChange = (e) => setSearch(e.target.value);

  return (
    <div className="search">
      <form onSubmit={handleSearchFormSubmit}>
        <input type="text" className="search-input" onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
