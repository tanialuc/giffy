import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import './components/Gif.css'

// Link permite cambiar de dirección sin recargar todo la pagina
import { Link, Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to = "/gif/panda">Gifs de Pandas</Link> 
        <Link to = "/gif/programing">Gifs de Programación</Link> 
        <Link to = "/gif/Rick">Gifs de Rick</Link> 
        <Route 
          component = {ListOfGifs}
          path="/gif/:keyword" />
      </section >
    </div>
  )
}

export default App;
