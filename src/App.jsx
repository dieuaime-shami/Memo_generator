import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainComponent from './Components/MainComponent'
import HeadComponent from './Components/HeadComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeadComponent/>
      <MainComponent/>
    </>
  )
}

export default App
