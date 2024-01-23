import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { countAtom, evenSelector } from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App() { 
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("Re-rendering Count component")
  return <div>
    <CountRenderer />
    <Buttons />
    <EvenCountRenderer/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return<>
  {(isEven)? "It is even": null}
  </>
}

export default App
