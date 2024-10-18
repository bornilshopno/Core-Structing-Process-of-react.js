import { useState } from 'react'
import './App.css'
import Comps from './NewComponent'
import Properties from './Properties'
import CountDown from './CountDown'
import Effect from './Effect'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert("Hi! I am clicked from JSX")
  }

  return (
    <>
      <h2>React Concepts:</h2>
      <hr /><hr />
      <h4>1. Adding Component</h4>
      <Comps />
      <hr />
      <div>
        <h4>2. Button By JSX+ 6. Event Handler</h4>
        <button onClick={handleClick}>Button on JSX</button>
      </div>
      <hr />
      <h4>3. Information Using Props</h4>
      
      <Properties name='Ema' age={30} profession="Housewife"></Properties>
      <Properties name='Manna' age={36} profession="Code Learner"></Properties>
      <Properties name='Muad' age={2} profession="I am a Kid Only!"></Properties>

      <hr />
      <h4>4. UseStates()</h4>
      <CountDown></CountDown>
      <hr />
      <h4>5. UseEffect()</h4>
      <Effect></Effect>
      


    </>
  )
}

export default App
