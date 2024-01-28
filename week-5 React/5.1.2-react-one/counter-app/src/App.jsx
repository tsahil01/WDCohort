
import {useState} from "react"; // hook

function App() {
  const [count, setCount] = useState(0);
  // console.log(count)
  // console.log(setCount)

  function onClickHandler(){
    setCount(count + 1);
  }
  return (
    <div>
      <CustomeButton count = {count} setCount={setCount}></CustomeButton>
    </div>
  )
}

// Component
function CustomeButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
