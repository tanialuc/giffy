import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import './components/Gif.css'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword={'programming'} />
      </section >
    </div>
  )
}

export default App;
