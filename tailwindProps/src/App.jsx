import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-950 text-white p-4 rounded-2xl'>Tailwind Test</h1>
      <Card username = "Shivam Goel" text = "I am 20 years old"/> 
      <Card username = "Krishna Goel" text = "I am 17 years old"/>
    </>
  )
}

export default App
