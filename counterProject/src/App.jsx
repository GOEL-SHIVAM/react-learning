import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 100) setCounter(counter + 1);
    if (counter < 100) setCounter(counter + 1); // will not add value even doing "counter + 1" as here setValue sends it in bunch of code to execute and if it is same then it will not add value
    if (counter < 100) setCounter(counter + 1);
    if (counter < 100) setCounter(counter + 1);
  };

  const addMultipleValue = () => {
    if (counter < 100) setCounter((prevCounter) => prevCounter + 1);
    if (counter < 100) setCounter((prevCounter) => prevCounter + 1); // will add value even doing "prevCounter + 1"  as setCounter now have callback function and it will add value
    if (counter < 100) setCounter((prevCounter) => prevCounter + 1);
    if (counter < 100) setCounter((prevCounter) => prevCounter + 1);
  };

  const subValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Value Basic Project</h1>
      <h2>counter value : {counter} </h2>
      <br />
      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={addMultipleValue}>addMultiple value</button>
      <br />
      <br />
      <button onClick={subValue}>Remove value</button>
    </>
  );
}

export default App;
