import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    // counter = counter + 1
    if (counter < 20) {
      setCounter(counter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      console.log(counter)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log(counter)
    }
  }
  return (
    <>
      <h1>React {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
