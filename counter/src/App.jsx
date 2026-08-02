import { useState } from 'react'  // hook comes from here
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

   let [counter, setCounter] = useState(15)
  //  let counter = 1

   const addValue = () => {
      // counter = counter + 1;
      if(counter < 20){
      setCounter(counter + 1);
      console.log(counter + 1);
      }
  
   }

   const decValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    console.log(counter - 1);
    }
    
   }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <br/>

      <button onClick = {addValue}>Add value {counter}</button>
      <br/>
      <button onClick = {decValue}>Decrease Value  {counter}</button>
      <p>footer:  {counter}</p>
    </>
  )
}

export default App
