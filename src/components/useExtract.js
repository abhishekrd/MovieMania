import React, { useState } from 'react'
import { useEffect } from 'react';

export const API_URL =  `http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


const useExtract = (apiParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [movie, setMovie] = useState(null);
  
    const getMovie = async (url) => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
  
        console.log(data);
        if (data.Response === "True") {
          setIsLoading(false);
          setMovie(data.Search || data);
          setIsError({ show: "false", msg: "" });
        } else {
          setIsError({ show: "true", msg: data.Error });
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    //debouncing
    useEffect(() => {
      let timeOut = setTimeout(() => {
        getMovie(`${API_URL}&s=${apiParams}`);
      }, 500);
     
      return () => {
        clearTimeout(timeOut);
        console.log("clear");
      };
    }, [apiParams]);
  
    return { isLoading, isError, movie };
  };
  
  export default useExtract;