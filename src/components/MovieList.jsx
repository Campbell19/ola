import React, {useContext, useEffect} from 'react'
import {Movie} from '../Movie'
import MovieItem from './MovieItem'

let number = '&maxResults=10'



const MovieList = () => {
  let  {movie, setMovie, mySearch, setMySearch, select, setSelect} = useContext(Movie)
  useEffect(() => {
     let getMyMovie = async () => {
      let storedData =localStorage.getItem('mike');
      if (storedData){
        setMovie(JSON.parse(storedData))
        console.log(storedData)
      }else{
      let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${mySearch}&key=${process.env.REACT_APP_API_KEY}${number}`);
      let data = await response.json();
       localStorage.setItem('mike', JSON.stringify(data.items));
      
    

      // console.log(data.items)
      // setMovie(data.items)
    }
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
