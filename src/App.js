import logo from './logo.svg';
import './App.css';
import MoleContainer from './MoleContainer';
import {useState} from 'react';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 8; i++){
      hills.push(
        <MoleContainer
        setScore={setScore}
        score={score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
