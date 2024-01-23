import { memo, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './CountContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </>
  )
}

function Count({setCount}){
  return <>
  <h1>Rerendering {Math.random()*10}</h1>
  <DisplayCount/>
  <Btn setCount={setCount} />
  </>
}

function DisplayCount(){
  const count = useContext(CountContext)
  return <>
  <h1>{count}</h1>
  </>
}

const Btn = memo(function({setCount}){
  const count = useContext(CountContext)
  return<>
<button onClick={()=>setCount(count+1)}>Inc Count</button>
  </>
})

export default App
