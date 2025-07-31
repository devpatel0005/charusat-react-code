import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import EventDemo from './EventDemo'
import Counter from './Counter'
import Sum from './Sum'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
    <Sum/>
    
    </>
   
  )
}

export default App
