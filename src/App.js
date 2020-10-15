import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';

function App() {
  // el usestate devuelve un arreglo de dos posiciones
  const [gifs, setGifs] = useState([])
  
useEffect(function () {
  getGifs({keyword: 'rick'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => {
            return <div>
              <h4>{singleGif.tittle}</h4>
              <small>{singleGif.id}</small>
              <img scr={singleGif.url} />
            </div>
          })         
        }
      </section >
    </div>
  );
}

export default App;
