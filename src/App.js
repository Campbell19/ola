import './App.css';
import React from 'react';
import MyMovie from './Movie';
import Form from './components/Form';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
    <Form/>
         <MyMovie>
      <MovieList></MovieList>
    </MyMovie>
    </>
    
  );
}

export default App;
