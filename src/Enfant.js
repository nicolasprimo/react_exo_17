import React,{useState} from 'react'


function Enfant(props) {
  return (
    <div className="App">     
      <input type="button" value="Incrémenter de 4" onClick={()=>props.incr(4)}/>
    </div>
  );
}

export default Enfant;
