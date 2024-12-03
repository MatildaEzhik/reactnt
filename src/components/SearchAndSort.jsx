import React, { useState } from 'react';

function SearchAndSort({ onSearch, onSort }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="поиск по имени"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={() => onSort('asc')}>сортировать по цене (возр.)</button>
      <button onClick={() => onSort('desc')}>сортировать по цене (убыв.)</button>
    </div>
  );
}

export default SearchAndSort;
