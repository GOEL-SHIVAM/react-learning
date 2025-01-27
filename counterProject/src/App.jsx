import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter<10) setCounter(counter + 1);
  }

  const subValue = () => {
    if(counter>0)setCounter(counter - 1);
  }

  return (
    <>
      <h1 >Counter Value Basic Project</h1>
      <h2>counter value : {counter} </h2>
      <br /><br />
      <button
      onClick={addValue}>Add value</button>
      <br /><br />
      <button
      onClick={subValue}>Remove value</button>
    </>
  )
}

export default App
