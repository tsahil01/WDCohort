import React from "react"
import CreateTodo from "../components/CreateTodo"
import Todos from "../components/Todos"

function App() {
  const [todos, setTodos]= React.useState([]);

  // Not the right way to send the request==>
  
  fetch("http://localhost:4000/todos")
  .then(async function(res){
    const json = await res.json();
    console.log(json.msg)
    setTodos(json.msg);
  })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos = {todos }></Todos>
    </div>
  )
}

export default App
