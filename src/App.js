import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';


function App() {
  
let[count,setcount] =useState(0);

let[isMorning,setMorning] = useState(true);

  return (
    <div className={`box ${isMorning? 'dayLight': ''}`} >

      <h1> Day time = {isMorning? 'Morning' : 'Night'} </h1>
     <Message counter={count} />
   <br/>

   <button onClick={()=> setcount(++count)}>Update Count</button> 
    
    <button onClick={()=> setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
