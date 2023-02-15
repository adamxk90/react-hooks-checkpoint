import { Link, useParams } from 'react-router-dom'

import movies from '../data/movies'

const SingleMovie = () => {
  const params = useParams()
  const movie = movies.find((movie) => movie.slug === params.slug)
  return (
    <div className='singleMovieClass'>
      <h1>{movie.title}</h1>
      <a href={movie.posterurl}><br/> Watch Trailer</a>
      <img src={movie.posterurl} alt={movie.title}></img>
      <p>{movie.description}</p>
      <Link to="/Movies">Return to all movies</Link>
    </div>
  )
}

export default SingleMovie
