import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './context'

const Movies = () => {

    const { movie,isLoading } = useGlobalContext()

    if(isLoading){
      return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      )
    }
  return (
    <>
    <section className='movie-page'>
        <div className='grid grid-col-four'>
     { movie.map((currentMovie) => {
         const {imdbID,Poster,Title} = currentMovie;

         const shortName = Title.substring(0,15);

         return <NavLink to={`movie/${imdbID}`} key={imdbID} className="card-big">
            <div className='card'>
                <div className='card-info'>
                  <h2>{shortName.length >= 15 ? `${shortName}...` : shortName}</h2>
                  <img src={Poster} alt={imdbID} />
                  <h3 style={{color:"whitesmoke"}}>{currentMovie.Type}</h3>
                  <h3 style={{color:"yellow"}}>{currentMovie.Year}</h3>
                </div>
            </div>
         </NavLink>
      })
    }
    </div>
    </section>
    </>
  )
}

export default Movies