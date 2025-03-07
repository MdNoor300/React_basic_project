import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter,] = useState(0)
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
   
  };

  const removeValue = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  };
   
  return (
    <>
     <h1>React with Noor {counter}</h1>
     <h1>Counter value</h1>
     <button
     onClick={addValue}
     >Add value</button>{" "}
     <button
     onClick = {removeValue}
     >Remove value</button>
     <p>footer: {counter}</p>


    </>
  )
}

export default App
