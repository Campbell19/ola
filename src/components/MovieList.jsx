import React, {useContext, useEffect} from 'react'
import {Movie} from '../Movie'
import MovieItem from './MovieItem'

let url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=terminator&key=AIzaSyAng_pu_QRLCzBZsA8iRbU8lwchZWRaKTM'

const MovieList = () => {
  let  {movie, setMovie, mySearch, setMySearch, select, setSelect} = useContext(Movie)
  useEffect(() => {
     let getMyMovie = async () => {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.items)
      setMovie(data.items)

    }

    getMyMovie()
     
  },[setMovie,setSelect])
  return (
    <div>
      {movie.map((x, y) =>{
        return(
           <MovieItem key={y++} mike={x}/>   
          
        );
      })};
    </div>
  )
}

export default MovieList
