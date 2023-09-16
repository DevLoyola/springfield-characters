import './App.css';
import logo from './logo.png'
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [characterData, setCharacterData] = useState(null);

  const getCharacter = () => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(res => {
        console.log(res.data[0]);
        setCharacterData(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="app-background">
      <img src={logo} alt="logo" className="logo" />
      
      <button className="button" onClick={getCharacter}>
        Grab a Springfield Character Quote!
      </button>
      {characterData && (
        <div className="character-card">
          <p>{characterData.character}</p>
          <p>{characterData.quote}</p>
          <img src={characterData.image} alt={characterData.character} />
        </div>
      )}
    </div>
  );
}

export default App;
