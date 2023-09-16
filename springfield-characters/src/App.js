import './App.css';
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
      <h1>Springfield</h1>
      <button className="button" onClick={getCharacter}>
        Get Springfield Character
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
