import React, { useContext, useState } from 'react'
import { useEffect } from 'react';

const AppContext = React.createContext();

const API_URL =  `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({children}) => {
    const [movie,setMovie] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState({show:false,msg:""})
    const [search,setSearch] = useState("avengers")

    const getMovies = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)

            if(data.Response === "True"){
                setIsLoading(false)
                setMovie(data.Search)
                setIsError({ show: false, msg: "" });
            }
            else{
                 setIsError({show:true,msg:data.Error})
            }
        }
        catch(error){
           console.log(error);
        }

        
     }
     
      useEffect(() => {

        const outTime = setTimeout(() => {
            getMovies(`${API_URL}&s=${search}`)
        },900)
        
       return () => clearTimeout(outTime)
     },[search])

    return <AppContext.Provider value={{movie,isLoading,isError,search,setSearch}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext,AppProvider,useGlobalContext}
