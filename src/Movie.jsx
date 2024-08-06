import React, { createContext , useState } from 'react';

export const Movie = createContext()

const MyMovie = ({children}) => {
    const [movie, setMovie] = useState([]);
    const [mySearch, setMySearch] = useState('');
    const [select, setSelect] = useState('');
  return (
    <Movie.Provider value={{movie, setMovie, mySearch, setMySearch, select, setSelect}}>
        {children}
    </Movie.Provider>
  )
}

export default MyMovie
