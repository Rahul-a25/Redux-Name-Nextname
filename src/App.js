
import { useState } from 'react';
import './App.css';
import mystore from './store';
import Output from './Output';

function App() {
  
  const [state,setState]=useState("")
  const calldispatch=()=>{
    mystore.dispatch({
      type:'name',
      username: state,
    });
  };
  
  return (
    <div className="App">
      <div className="inputwala" >
      <Output/>
          <input onChange={(e)=>setState(e.target.value)} type="text"  />
          <button onClick={calldispatch}>Submit</button>
         
          
      </div>
      
    </div>
  );
}

export default App;
