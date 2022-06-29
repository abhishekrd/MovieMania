import { NavLink, useParams } from "react-router-dom";
import useExtract from './useExtract';

const SingleMovie = () => {
  const { id } = useParams();
 

  const { isLoading, movie, isError } = useExtract(`&i=${id}`);

  if (isLoading) {
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="details">Released : {movie.Released}</p>
          <p className="details">Genre : {movie.Genre}</p>
          <p style={{color:"yellow",fontSize:18}}>Rating : {movie.imdbRating} / 10</p>
          <p className="details">Country : {movie.Country}</p>
          <NavLink to="/" className="back-btn">
           <p> Go Back </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;