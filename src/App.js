import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

function App() {
  // Initial movies data
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 4.8
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 4.9
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 4.7
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 4.6
    }
  ]);

  const [filters, setFilters] = useState({
    title: '',
    rating: ''
  });

  const appStyle = {
    textAlign: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '2rem'
  };

  const headerStyle = {
    marginBottom: '2rem',
    color: '#333'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    color: '#666',
    fontSize: '1.1rem'
  };

  // Filter movies based on title and rating
  const getFilteredMovies = () => {
    return movies.filter(movie => {
      // Filter by title (case-insensitive)
      const titleMatch = movie.title.toLowerCase().includes(filters.title.toLowerCase());
      
      // Filter by rating
      const ratingMatch = filters.rating === '' || movie.rating >= parseFloat(filters.rating);
      
      return titleMatch && ratingMatch;
    });
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Handle adding new movie
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = getFilteredMovies();

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>🎬 Movie App</h1>
        <p style={subtitleStyle}>Discover and share your favorite movies</p>
      </header>

      <AddMovieForm onAddMovie={handleAddMovie} />
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
