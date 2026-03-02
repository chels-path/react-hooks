import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filterContainerStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const inputGroupStyle = {
    flex: '1',
    minWidth: '200px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e0e0e0',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    outline: 'none'
  };

  const clearButtonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    alignSelf: 'flex-end'
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitleFilter(value);
    onFilterChange({ title: value, rating: ratingFilter });
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    setRatingFilter(value);
    onFilterChange({ title: titleFilter, rating: value });
  };

  const handleClear = () => {
    setTitleFilter('');
    setRatingFilter('');
    onFilterChange({ title: '', rating: '' });
  };

  return (
    <div style={filterContainerStyle}>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Filter by Title:</label>
        <input
          type="text"
          value={titleFilter}
          onChange={handleTitleChange}
          placeholder="Search movies..."
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
      </div>
      
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Filter by Rating (min):</label>
        <input
          type="number"
          value={ratingFilter}
          onChange={handleRatingChange}
          placeholder="Minimum rating..."
          min="0"
          max="5"
          step="0.5"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
      </div>

      <button 
        style={clearButtonStyle}
        onClick={handleClear}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
