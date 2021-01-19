import React,{useState} from 'react'
import './App.css';
import Enfant from './Enfant'

function App() {
  const [number,setNumber] = useState(0);
  return (
    <div className="App">
      {number}
      <Enfant incr={(param) => setNumber(number+param)}/>
    </div>
  );
}

export default App;
