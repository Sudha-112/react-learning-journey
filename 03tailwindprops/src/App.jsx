import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "sudha",
    age: 23
  }

  return (
    <>
      <h1 className='bg-cyan-500 p-6 rounded-xl '>Tailwind test</h1>
      <Card username='chaiaurcode' position='CSE Engineer'/>
      <Card username='sudha'/>
    </>
  )
}

export default App
