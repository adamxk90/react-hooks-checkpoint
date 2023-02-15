import './MovieCard.css'
function MovieCard(props) {
  console.log(props)
  const { id, title, description, posterurl } = props
  return (
    <div className="MovieCard" >
      <div>
        <img src={posterurl} alt={title} width="200" height="auto"></img>
      </div>
      <div className="Info">
        <small>{id}</small>
        <br />
        <hr />
        <h1>{title}</h1>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MovieCard
