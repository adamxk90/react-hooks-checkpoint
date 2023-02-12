import { useState } from 'react'
import MovieCard from './MovieCard'
import movies from '../data/movies'

function MovieList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchRating, setSearchRating] = useState('')
  return (
    <>
      <h1>Movies</h1>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
      />
      <input
        type="number"
        placeholder="Search by rating..."
        onChange={(event) => {
          setSearchRating(event.target.value)
        }}
      />
      <hr />
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((movie) => movie.rating[0].includes((searchRating)))
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
    </>
  )
}

export default MovieList
