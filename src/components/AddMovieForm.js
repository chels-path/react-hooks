import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const formContainerStyle = {
    marginBottom: '2rem'
  };

  const toggleButtonStyle = {
    padding: '1rem 2rem',
    backgroundColor: isFormVisible ? '#dc3545' : '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '1rem'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: isFormVisible ? 'block' : 'none'
  };

  const formGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
    fontWeight: 'bold'
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

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '100px'
  };

  const submitButtonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title || !formData.description || !formData.posterURL || !formData.rating) {
      alert('Please fill in all fields');
      return;
    }

    // Convert rating to number
    const newMovie = {
      ...formData,
      rating: parseFloat(formData.rating)
    };

    onAddMovie(newMovie);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: ''
    });
    
    setIsFormVisible(false);
  };

  return (
    <div style={formContainerStyle}>
      <button
        style={toggleButtonStyle}
        onClick={() => setIsFormVisible(!isFormVisible)}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = isFormVisible ? '#c82333' : '#218838';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isFormVisible ? '#dc3545' : '#28a745';
        }}
      >
        {isFormVisible ? 'Cancel' : 'Add New Movie'}
      </button>

      <div style={formStyle}>
        <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter movie title"
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Enter movie description"
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Poster URL:</label>
            <input
              type="url"
              name="posterURL"
              value={formData.posterURL}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter poster URL"
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Rating (0-5):</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              style={inputStyle}
              placeholder="Enter rating"
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <button type="submit" style={submitButtonStyle}>
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
