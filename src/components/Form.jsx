import React, {useContext, useState } from 'react'
import { Movie } from '../Movie';


const Form = () => {
  let {setMySearch} = useContext(Movie);
  const [film, setFilm] = useState('');
  const [message, setMessage] = useState('');
  let dele = (e) => {
    e.preventDefault();
    setMySearch(film);
    setFilm('');
  }

  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'20px', backgroundColor:'grey'}}>
        <div>
      <h1 style={{color:'white'}}>Movie</h1>

      </div>

      <form onSubmit={dele}>
        <main style={{width:'300px', height:'50px', borderRadius:'40px'}}>
        <input value={film} onChange={(e) => setFilm(e.target.value)} type="text" placeholder='Search....' style={{border:'none', width:'100%', height:'100%'}} />
        </main>
        <input type="submit" />
        </form>
        

        
        



    </div>
  )
}

export default Form
