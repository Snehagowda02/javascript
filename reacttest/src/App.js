import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [counter, setcounter] = useState(5)
  const increment = () => {
    // counter = counter + 1
    setcounter(counter+1 )

  };

  const decrer = () =>{
    setcounter(counter -1)
  }
  return (
    <>
    <h1>  Counter app</h1>

    <h3>Conter value is : {counter}</h3>

    <button  onClick={increment}> Add Vaue</button>
    {/* <br> </br> */}
    <br />

    <button onClick={decrer}>remove calue</button>
    
    </>
  );
}

export default App;
