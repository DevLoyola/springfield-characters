import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const getCharacter = () => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="App">
      <h1>Springfield</h1>
      <button onClick = {getCharacter}>Get Springfield Charater</button>
    </div>
  );
}

export default App;
