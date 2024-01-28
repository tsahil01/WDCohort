import React from 'react';

function App(){
  const [count, incCount] = React.useState(0)

  return(
    <div>
      <h1>Hello World</h1>
      <CustomeBtn incCount = {incCount} count = {count} ></CustomeBtn>
    </div>
  )
}

function CustomeBtn(props){
  return(
    <button onClick = { function cnt(){
      props.incCount(props.count+1)
    } } >Count {props.count} </button>
  )
}


export default App
