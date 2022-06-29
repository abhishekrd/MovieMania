import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {

  const {search,setSearch,isError} = useGlobalContext();
  return (
   <>
        <section className='search-section'>
          <p className='h1'>Search your favourite Movie</p>
          <form action='#' onSubmit={(e) => {e.preventDefault()}}>
            <div>
              <input type="text" placeholder="Search your favourite movie" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </div>
          </form>

          <div className='card-error'>
            <h2>{isError.show && isError.msg}</h2>
          </div>
        </section>
   </>
  )
}

export default Search